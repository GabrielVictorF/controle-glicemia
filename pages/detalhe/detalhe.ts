import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditaPage } from '../edita/edita';

import { ApiProvider } from '../../providers/api/api';
import { FunctionsProvider } from '../../providers/functions/functions';

@Component({
  templateUrl: 'detalhe.html'
})

export class DetalhePage {
  private item: any = []; //Item recebido do navigation
  private state = []; //Nivel de glicemia (bom ou ruim)
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public api: ApiProvider, public functions: FunctionsProvider) {
    this.item = this.navParams.get('itemSelecionado');
    
  }

  ionViewWillEnter() {
    if (this.item.resultado_antes < 80)
      this.state[0] = "arrow-round-down";
    else if (this.item.resultado_antes >= 80 && this.item.resultado_antes <= 110)
      this.state[0] = "arrow-round-forward";
    else
     this.state[0] = "arrow-round-up";
    if (this.item.resultado_depois < 80)
      this.state[1] = "arrow-round-down"
    else if (this.item.resultado_depois >= 80 && this.item.resultado_depois <= 110)
      this.state[1] = "arrow-round-forward";
    else
      this.state[1] = "arrow-round-up";
  }
  public edita() {
    this.navCtrl.push(EditaPage, {'itemSelecionado': this.item});
  }

  public deleta() {
    this.api.deleteMedicao(this.item.objectId).subscribe(res => {
      console.log(res);
      this.functions.showToast('Removido!');
       localStorage.setItem("alterMedicoes", true);
      this.navCtrl.pop();
    }, Error => {
      console.log(Error);
    });
  }
}