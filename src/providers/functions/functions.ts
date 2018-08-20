import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, AlertController } from 'ionic-angular';

/*
  Generated class for the FunctionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FunctionsProvider {

  constructor(public http: HttpClient, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    console.log('Hello FunctionsProvider Provider');
  }

  public dataToEpoch(dataHuman) {
  	let dataEpoch = {
  		ano: '',
  		mes : '',
  		dia: '',
  		hora: '',
  		minuto: ''
  	}
  	dataEpoch.ano = dataHuman.substring(0,4);
  	dataEpoch.mes = dataHuman.substring(5, 7);
  	dataEpoch.dia = dataHuman.substring(8, 10);
  	dataEpoch.hora = dataHuman.substring(11, 13);
  	dataEpoch.minuto = dataHuman.substring(14, 16); 

    parseInt(dataEpoch.mes);
    dataEpoch.mes -= 1;
    let data = new Date(dataEpoch.ano, dataEpoch.mes, dataEpoch.dia, dataEpoch.hora, dataEpoch.minuto);
    data = data.getTime() / 1000.0;
    console.log("Antes - " + data);
    data.toString();
    data += "000";
  	console.log(data);
    return data;
  }

  public horaAgora() {
    let data = new Date();
    var ano = data.getFullYear();
    var mes = data.getMonth() + 1;
    var dia = data.getDate();
    if (mes < 10)
      var dataFormatada = ano + "-0" + mes + "-" + dia;
    else
      var dataFormatada = ano + "-" + mes + "-" + dia;
    return dataFormatada;
  }

  public showToast(message: string) {
      const toast = this.toastCtrl.create({
        message: message,
        duration: 2000,
        showCloseButton: true,
        closeButtonText: 'OK'
      });
      toast.present();
  }

  public showAlert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [{
        text: 'OK'
      }]
    });
    alert.present();
  }
}
