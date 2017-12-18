import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentarioPopOverPage } from './comentario-pop-over';

@NgModule({
  declarations: [
    ComentarioPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentarioPopOverPage),
  ],
})
export class ComentarioPopOverPageModule {}
