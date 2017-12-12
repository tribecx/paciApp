import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-auditoria',
  templateUrl: 'auditoria.html',
})
export class AuditoriaPage {

  data:any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ngOnInit(): void {
    
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk2IiwidG9rZW4iOiIyYmEwN2Y1NmRhMmYxNGE0In0.2mHibAOBCGJEpan4IzcakkZwz6C9FHWP7zpB98vrP74";
    let data;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Token', token);

    let options = new RequestOptions({ headers: headers});

    this.http.get('http://paci-dev.growthdrivendesign.mx/paciApi/v1/app/auditorias', options).map(res => res.json()).subscribe(data => {
      this.data = data.result;
      this.imprimir(data.result);
    });           
    
  }

  imprimir(data){
    console.log(data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditoriaPage');
  }

  goPerfil() {
    this.navCtrl.push('PerfilPage');
  }

  goResumen(){
    this.navCtrl.push('ResumenPreguntasPage');
  }


}
