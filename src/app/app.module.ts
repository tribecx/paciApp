import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule }    from '@angular/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { LogoutPopOverPage } from '../pages/logout-pop-over/logout-pop-over';
import { RecomendacionPage } from '../pages/recomendacion/recomendacion';
import { ModuloPopOverPage } from '../pages/modulo-pop-over/modulo-pop-over';
import { PotencialPopOverPage } from '../pages/potencial-pop-over/potencial-pop-over';
import { ComentarioPopOverPage } from '../pages/comentario-pop-over/comentario-pop-over';
import { NoAplicaPopOverPage } from '../pages/no-aplica-pop-over/no-aplica-pop-over';

import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogoutPopOverPage,
    RecomendacionPage,
    ModuloPopOverPage,
    PotencialPopOverPage,
    ComentarioPopOverPage,
    NoAplicaPopOverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogoutPopOverPage,
    RecomendacionPage,
    ModuloPopOverPage,
    PotencialPopOverPage,
    ComentarioPopOverPage,
    NoAplicaPopOverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
