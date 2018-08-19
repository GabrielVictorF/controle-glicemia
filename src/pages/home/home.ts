import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MedicoesPage } from '../medicoes/medicoes';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public medicoes() {
  	this.navCtrl.push(MedicoesPage);
  }
}
