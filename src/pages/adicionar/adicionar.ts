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
  private dataHoje = this.functions.horaAgora();
	private ico = {
		icoMedicao: 'arrow-dropdown',
		icoInjecao: 'arrow-dropdown'
	}
	private medicao = {
		resultado: '',
		data: this.dataHoje,
    turno: ''
	}
	private injecao = {
		quantidade: ''
	}

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public functions: FunctionsProvider, public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarPage');
  }
  private mostra(ico) {
  	if (ico == 'medicao') {
  		if (this.ico.icoMedicao == 'arrow-dropdown')
  			this.ico.icoMedicao = 'arrow-dropup';
  		else 
  			this.ico.icoMedicao = 'arrow-dropdown';
  	} else {
  		if (this.ico.icoInjecao == 'arrow-dropdown')
  			this.ico.icoInjecao = 'arrow-dropup';
  		else 
  			this.ico.icoInjecao = 'arrow-dropdown';
  	}
  }

  private adicionar() {
    console.log(this.medicao);
  	 // this.medicao.data = this.functions.dataToEpoch(this.medicao.data);
    this.api.postMedicao(this.medicao).subscribe(res => {
      console.log(res);
    })
  }
}
