import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResumenPreguntasPage } from './resumen-preguntas';

@NgModule({
  declarations: [
    ResumenPreguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumenPreguntasPage),
  ],
})
export class ResumenPreguntasPageModule {}
