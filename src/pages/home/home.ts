import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	splash = true;
  
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
  	setTimeout(() =>{
  		this.splash = false;
  	}, 4000);
  }

   goAuditorias() {
    this.navCtrl.setRoot('AuditoriaPage');
  }

}
