import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	splash = true;
  data:any = [];
  
  constructor(public navCtrl: NavController, public http:Http) {
  }

  ngOnInit(): void {

    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk2IiwidG9rZW4iOiI4ODAwZmQ3YjY5Y2MwNzUzIn0.tyrSFOZ_rQkMCt0Uh-ZbAWgn1noS09ZJERe_I1Cnoys";

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Token', token);

    let options = new RequestOptions({ headers: headers});

    this.http.get("http://paci-dev.growthdrivendesign.mx/paciApi/v1/app/auditorias", options)
      .subscribe(
        (val) => {
          console.log("Si", val);
        },
        (response) => {
          console.log("No", response);
        }
      )
    
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
