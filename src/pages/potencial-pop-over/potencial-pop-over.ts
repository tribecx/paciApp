import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PotencialPopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-potencial-pop-over',
  templateUrl: 'potencial-pop-over.html',
})
export class PotencialPopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PotencialPopOverPage');
    let element = document.getElementById('id')
    let parent=element.parentElement
    let parent2 = parent.parentElement //popover-content
    parent2.parentElement.style['width'] = "260px"
    parent2.parentElement.style['height'] = "350px"
  }

}
