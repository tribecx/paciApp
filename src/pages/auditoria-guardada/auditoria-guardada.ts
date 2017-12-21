import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AuditoriaGuardadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auditoria-guardada',
  templateUrl: 'auditoria-guardada.html',
})
export class AuditoriaGuardadaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuditoriaGuardadaPage');
  }

  goAudits(){
    this.navCtrl.setRoot('AuditoriaPage');
  }
}
