import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FunctionsProvider } from '../../providers/functions/functions';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AdicionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar',
  templateUrl: 'adicionar.html',
})
export class AdicionarPage {
  private dataHoje = this.functions.dateToEpoch();
	private medicao = {
		res_antes: 1,
    res_depois: 2,
    quantidade: 1,
		data: this.dataHoje,
    turno: 2
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public functions: FunctionsProvider, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarPage');
  }

  private adicionar() {
    console.log(this.medicao);
    // if (this.medicao.data == '' || this.medicao.resultado == '' || this.medicao.turno == '')
    //   this.functions.showToast('Preencha todos os campos primeiro');
    // else {
      this.medicao.data = this.functions.toEpoch(this.medicao.data);
      this.api.postMedicao(this.medicao).subscribe(res => {
        console.log(res);
        this.medicao.data = this.dataHoje;
        localStorage.setItem("alterMedicoes", true);
        this.functions.showToast('Medição adicionada com sucesso!');
      },
      Error => {
          this.functions.showToast('Erro ao adicionar medição, código: ' + Error.error.code);
      });
  } 
//}
}
