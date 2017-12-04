import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-auditoria',
  templateUrl: 'auditoria.html',
})
export class AuditoriaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditoriaPage');
  }

  goPerfil() {
    this.navCtrl.push('PerfilPage');
  }


}
