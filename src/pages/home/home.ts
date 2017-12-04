import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { RestProvider } from '../../providers/rest/rest'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	splash = true;

  constructor(public navCtrl: NavController, public http:Http) {

  }
  tickets = [];

  ngOnInit(): void {/*
    const body = 
    {
      "username": "paci",
      "password": "123"
    };

    this.http.post("http://paci.makeitsense.io/paciApi/v1/login",
    {
      "username": "paci",
      "password": "123"
    })
    .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", 
                        val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });*/



    
    /*
    console.log('====================================');
    console.log(body);
    console.log('====================================');
    this.http.post('http://paci.makeitsense.io/paciApi/v1/login', body).subscribe(data => console.log(data));*/
    //this.http.post('http://paci.makeitsense.io/paciApi/v1/login', body).subscribe(data => {this.tickets = data.json();console.log(this.tickets);});
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
