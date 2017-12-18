import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { RecomendacionPage } from '../recomendacion/recomendacion';
import { ModuloPopOverPage } from '../modulo-pop-over/modulo-pop-over';
import { PotencialPopOverPage } from '../potencial-pop-over/potencial-pop-over';
import { ComentarioPopOverPage } from '../comentario-pop-over/comentario-pop-over';

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

  cambiarModulo(){
    let popOver = this.popOver.create ( ModuloPopOverPage );
    popOver.present();
  }

  agregarPotencial(){
    let popOver = this.popOver.create ( PotencialPopOverPage );
    popOver.present();
  }

  agregarComentario(){
    let popOver = this.popOver.create ( ComentarioPopOverPage );
    popOver.present();
  }

}
