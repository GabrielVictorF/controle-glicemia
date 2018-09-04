import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicoes } from '../../models/medicoes';

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

  constructor(public http: HttpClient) {
    this.APP_ID = "8A6BC524-0A01-1D21-FF22-34BAD81EED00";
    this.API_KEY = "17B5D094-F4D9-1D4D-FF3B-7BC9768DB900";
    this.URL = "https://api.backendless.com";
    this.REST_API = this.URL + '/' + this.APP_ID + '/' + this.API_KEY;
	}

  public getMedicoes(): any {
  	const url = this.REST_API + "/data/medicoes";
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
      resultado_antes: parseInt(medicao.resultado),
      quantidade_insulina: parseInt(medicao.quantidade),
      data: medicao.data,
      turno: parseInt(medicao.turno)
    }
    return this.http.post(url, body, httpOptions);
  }

  public getPesquisa(termo): any {
    const where = "?where=data%3D'" + termo + "'";
    const url = this.REST_API + '/data/medicoes' + where;
    return this.http.get(url); 
  }
}
