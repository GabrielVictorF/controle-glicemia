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

  // public dataToEpoch(dataHuman) {
  // 	let dataEpoch = {
  // 		ano: '',
  // 		mes : '',
  // 		dia: '',
  // 		hora: '',
  // 		minuto: ''
  // 	}
  // 	dataEpoch.ano = dataHuman.substring(0,4);
  // 	dataEpoch.mes = dataHuman.substring(5, 7);
  // 	dataEpoch.dia = dataHuman.substring(8, 10);
  // 	dataEpoch.hora = dataHuman.substring(11, 13);
  // 	dataEpoch.minuto = dataHuman.substring(14, 16); 

  //   parseInt(dataEpoch.mes);
  //   dataEpoch.mes -= 1;
  //   let data = new Date(dataEpoch.ano, dataEpoch.mes, dataEpoch.dia, dataEpoch.hora, dataEpoch.minuto);
  //   data = data.getTime() / 1000.0;
  //   console.log("Antes - " + data);
  //   data.toString();
  //   data += "000";
  // 	console.log(data);
  //   return data;
  // }

  public toEpoch() {
    let date = new Date();
    var dataNew = date.getTime();
    return dataNew;
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

  public dateToEpoch() { 
    let diaHoje = new Date();
    let data: any = {
      month: diaHoje.getMonth() + 1,
      day: diaHoje.getDate(),
      year: diaHoje.getFullYear()
    }
    
    data.month = "0" + data.month;
    data.year = data.year;

    if (data.day < 10)
      data.day = "0" + data.day;
    var dataFormatada =  data.year + "-" + data.month + "-" + data.day;
    console.log(dataFormatada);
    return dataFormatada;
  }
}
