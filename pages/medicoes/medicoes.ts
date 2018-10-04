import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { FunctionsProvider } from '../../providers/functions/functions';

import { Medicoes } from '../../models/medicoes';

import { DetalhePage } from '../detalhe/detalhe';
import { ResultadoPage } from '../resultado/resultado';

/**
 * Generated class for the MedicoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicoes',
  templateUrl: 'medicoes.html',
})
export class MedicoesPage {
	private data: Medicoes = [];
  private tipo: number;
  private media: number;
  private escolha = 0;
  private alteracao;
  public turno;
  private ico = [];
  public show = {
    hoje: false,
    categoria: false,
    especifico: false,
    todos: false,
    resultado: false
  };
  private showDiaEspecifico = false;
  private showCategoriaEspecifica = false;
  private ocorrenciaData;
  private GET = 0; //Get atual
  private offset = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private api: ApiProvider,
    public functions: FunctionsProvider) {
      for (var i = 0; i <= 3; i++)
        this.ico.push("arrow-down"); 
      this.alteracao = localStorage.getItem('alterMedicoes');
  }

  ionViewWillEnter() {
    console.log(localStorage.getItem("delete"));
    if (this.escolha == 1 && this.alteracao)
      this.getAllMedicoes();
    console.log('ionViewDidLoad MedicoesPage');
  }


  getSemanaMedicoes() {
    
  }
  mostra(icoPos: number) {
    switch(icoPos) {
      case 0:
        this.show.hoje = !this.show.hoje;
        this.show.todos = false;
        if (this.show.hoje)
          this.show.resultado = true;
        else
          this.show.resultado = false;
        break;
      case 1:
        this.show.categoria = !this.show.categoria;
        break;
      case 2:
        this.show.especifico = !this.show.especifico;
        break;
      case 3: 
        this.show.hoje = false;
        this.show.todos = !this.show.todos;
        if (this.show.todos) 
          this.show.resultado = true;
        else 
          this.show.resultado = false;
        break;
    }
    if(this.ico[icoPos] == "arrow-up") 
      this.ico[icoPos] = "arrow-down";
    else
      this.ico[icoPos] = "arrow-up";
    if (icoPos == 0)
      this.ico[3] = "arrow-down";
    else if (icoPos == 3)
      this.ico[0] = "arrow-down";
  }

  private calculaMedia() {
     let soma = 0;
    let length: number = this.data.length;
    for (let i = 0; i < length; i++) {
      soma += this.data[i].quantidade_insulina;
    } 
    this.media = soma / length;	
  }

  public getAllMedicoes(): any {
    this.navCtrl.push(ResultadoPage, {funcao: 1});
  }

  public detalheItem(item) {
    this.navCtrl.push(DetalhePage, {'itemSelecionado': item});
  }

  getItems(ev: any) {
    let val = ev.target.value;
     this.api.getPesquisa(val).subscribe(res => {
       this.data = res;
      // if (val == '' || this.data.length > 0)
      //   this.noResults = false;
      // if (this.data.length == 0 && val != '')
      //   this.noResults = true;
    });
     console.log(this.data);
  }

  public medicoesHoje() {
      let data = this.functions.toEpoch();
      this.navCtrl.push(ResultadoPage, {funcao: 3, filtro: data});
  }

  public medicoesDiaEspecifico() {
    
    this.ocorrenciaData = this.functions.toEpoch(this.ocorrenciaData);
    this.navCtrl.push(ResultadoPage, {funcao: 4, filtro: this.ocorrenciaData});
  }

  public medicoesTurnoEspecifico() { // Turno específico
    this.navCtrl.push(ResultadoPage, {funcao: 2, filtro: this.turno});
}

  public getAtual(infiniteScroll) {
    switch(this.GET) {
      case 1:
        this.offset =+ 10;
        this.getAllMedicoes().subscribe(res => {
          res.map(res => this.data.push(res));
          infiniteScroll.complete();
        });
        console.log("GET GET ALL MEDICOES");
    }
  } 
}
