import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EditaPage } from '../edita/edita';

import { ApiProvider } from '../../providers/api/api';
import { FunctionsProvider } from '../../providers/functions/functions';

@Component({
  templateUrl: 'detalhe.html'
})

export class DetalhePage {
  private item: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public api: ApiProvider, public functions: FunctionsProvider) {
    this.item = this.navParams.get('itemSelecionado');
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