import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';

import { DetalhePage} from '../detalhe/detalhe';

@Component({
   selector: 'page-resultado',
   templateUrl: 'resultado.html'
})

export class ResultadoPage {

  public data: any = [];
  private funcao: number;
  private filtro: any;
  private offset = 0;

  constructor(public api: ApiProvider, public navParams: NavParams, public navCtrl: NavController) {
    this.funcao = this.navParams.get("funcao");
    this.filtro = this.navParams.get("filtro");

    switch(this.funcao) {
      case 1:
        this.api.getMedicoes(this.offset).subscribe(res => {
          this.data = res;
        });
        break;
      case 2:
        this.api.getMedicoesTurnoEspecifico(this.filtro, this.offset).subscribe(res => {
          this.data = res;
        });
        break;
      case 3:
        this.api.getPesquisa(this.filtro).subscribe(res => {
          this.data = res;
        });
        break;
      case 4:
        this.api.getPesquisa(this.filtro).subscribe(res => {
          this.data = res;
        });
    }
  }

  doInfinite(infiniteScroll) {
    console.log(this.offset);

    setTimeout(() => {
      switch(this.funcao) {
        case 1:
          this.offset += 15;
          this.api.getMedicoes(this.offset).subscribe(res => {
          res.map(res => this.data.push(res));
          infiniteScroll.complete();
        });
        break;
        case 2:
          this.offset += 15;
          console.log(this.offset);
          this.api.getMedicoesTurnoEspecifico(this.filtro, this.offset).subscribe(res => {
            res.map(res => this.data.push(res));
            infiniteScroll.complete();
          });
      }
     

      console.log('Async operation has ended');
    });
  }

  public detalheItem(item) {
    this.navCtrl.push(DetalhePage, {'itemSelecionado': item});
  }
}