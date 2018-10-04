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

  constructor(public http: HttpClient, public toastCtrl: ToastController, 
              public alertCtrl: AlertController) {
    console.log('Hello FunctionsProvider Provider');
  }
  
  public toEpoch(dataHuman?) {
    console.log(dataHuman)
    let data: any = {};
    if (dataHuman) {
      let date = new Date(dataHuman);
        data.ano =  date.getFullYear(),
        data.mes =  date.getMonth(),
        data.dia =  date.getDate() + 1
    }
    else {
      let date = new Date();
      data.ano = date.getFullYear(),
      data.mes = date.getMonth(),
      data.dia =  date.getDate()
    }
    var dataNew = new Date(data.ano, data.mes, data.dia, 0, 0, 0);
    var formatado = dataNew.getTime();
    console.log(formatado);
    return formatado;
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
    console.log(diaHoje);
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
