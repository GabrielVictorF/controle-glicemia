import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicoes } from '../../models/medicoes';
import { FunctionsProvider } from '../functions/functions';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private APP_ID: string;
  private API_KEY: string;
  private URL: string;
  private REST_API: string;

  constructor(public http: HttpClient, public functions: FunctionsProvider) {
    this.APP_ID = "8A6BC524-0A01-1D21-FF22-34BAD81EED00";
    this.API_KEY = "17B5D094-F4D9-1D4D-FF3B-7BC9768DB900";
    this.URL = "https://api.backendless.com";
    this.REST_API = this.URL + '/' + this.APP_ID + '/' + this.API_KEY;
	}

  public getMedicoes(filtro2?): any {
      let filtro = "?pageSize=100&sortBy=data%20desc";
    if (filtro2) {
      filtro += "&where=turno%20%3D%20" + filtro2;
    }
  	const url = this.REST_API + "/data/medicoes" + filtro;
  	return this.http.get<Medicoes>(url);
  }

  public postMedicao(medicao): any {
    const url = this.REST_API + "/data/medicoes";
    const httpOptions = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    let body = {
      resultado_antes: parseInt(medicao.res_antes),
      resultado_depois: parseInt(medicao.res_depois),
      quantidade_insulina: parseInt(medicao.quantidade),
      data: medicao.data,
      turno: parseInt(medicao.turno)
    }
    return this.http.post(url, body, httpOptions);
  }

  public putMedicao(medicao): any {
    const objectId = medicao.objectId;
    const url = this.REST_API + "/data/medicoes/" + objectId;
    const httpOptions = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    let body = {
      resultado_antes: parseInt(medicao.resultado_antes),
      resultado_depois: parseInt(medicao.resultado_depois),
      quantidade_insulina: parseInt(medicao.quantidade_insulina),
      data: medicao.data,
      turno: parseInt(medicao.turno)
    }
    return this.http.put(url, body, httpOptions);
  }

  public deleteMedicao(objectId): any {
    const url = this.REST_API + "/data/medicoes/" + objectId;
    const httpOptions = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
    return this.http.delete(url, httpOptions);
  }

  public getPesquisa(data): any {
    const where = "?where=data%20%3D%20" + data;
    const url = this.REST_API + '/data/medicoes' + where;
    return this.http.get(url); 
  }
}
