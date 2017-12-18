import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RestProvider } from './../../providers/rest/rest'

@IonicPage()
@Component({
  selector: 'page-auditoria',
  templateUrl: 'auditoria.html',
})
export class AuditoriaPage {

  data:any = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http, private service:RestProvider)  {
  }

  ngOnInit(): void {

    this.service.login('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk2IiwidG9rZW4iOiIzY2QzOTBlNzZlNjczMTY4In0.BxvhskdByNjKicnhxywBg_mWuWhJ_FQobz_BKm7Vu4A');
    this.service.getAuditorias(bn =>  this.data = bn.result, mal => console.log('mal'));
    /*
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk2IiwidG9rZW4iOiIzY2QzOTBlNzZlNjczMTY4In0.BxvhskdByNjKicnhxywBg_mWuWhJ_FQobz_BKm7Vu4A";
    let data;

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Token', token);

    let options = new RequestOptions({ headers: headers});

    this.http.get('http://paci-dev.growthdrivendesign.mx/paciApi/v1/app/auditorias', options).map(res => res.json()).subscribe(data => {
      this.data = data.result;
      this.imprimir(data.result);
    });      */
    
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
