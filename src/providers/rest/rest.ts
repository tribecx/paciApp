import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class RestProvider {

  token: any;

  constructor(public http: Http) {
  }

  
  login(token){
    this.token = token;
    console.log(this.token);
  }


  getAuditorias(bn, mal){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Token', this.token);

    let options = new RequestOptions({ headers: headers});

    this.http.get('http://paci-dev.growthdrivendesign.mx/paciApi/v1/app/auditorias', options)
    .map(res => res.json())
    .subscribe( bn , mal );     
    
  }

}
