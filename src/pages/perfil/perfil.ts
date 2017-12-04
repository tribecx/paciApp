import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';

import { LogoutPopOverPage } from '../logout-pop-over/logout-pop-over';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popOver: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  presentConfirm(){
    let popOver = this.popOver.create( LogoutPopOverPage );
    popOver.present();
  }
}
