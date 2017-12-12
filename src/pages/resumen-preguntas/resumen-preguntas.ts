import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CuestionarioPage } from '../cuestionario/cuestionario';

/**
 * Generated class for the ResumenPreguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resumen-preguntas',
  templateUrl: 'resumen-preguntas.html',
})
export class ResumenPreguntasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResumenPreguntasPage');
  }

  continuar(){
    this.navCtrl.setRoot('CuestionarioPage');
  }

}
