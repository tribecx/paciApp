import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { RecomendacionPage } from '../recomendacion/recomendacion';
/**
 * Generated class for the CuestionarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuestionario',
  templateUrl: 'cuestionario.html',
})
export class CuestionarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popOver: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuestionarioPage');
  }

  select(a){
    if (a==1){
      document.getElementById('si').style.backgroundColor = '#008d95';
      document.getElementById('no').style.backgroundColor = '#d4d4d4';
      document.getElementById('na').style.backgroundColor = '#d4d4d4';
    }
    else if(a==2){
      document.getElementById('si').style.backgroundColor = '#d4d4d4';
      document.getElementById('na').style.backgroundColor = '#d4d4d4';
      document.getElementById('no').style.backgroundColor = '#008d95';
    }
    else{
      document.getElementById('si').style.backgroundColor = '#d4d4d4';
      document.getElementById('no').style.backgroundColor = '#d4d4d4';
      document.getElementById('na').style.backgroundColor = '#008d95';
    }
  }

  regresar(){
    this.navCtrl.setRoot('AuditoriaPage');
  }

  showInfo(){
    let popOver = this.popOver.create ( RecomendacionPage );
    popOver.present();
  }

}
