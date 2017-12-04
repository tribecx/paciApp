import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoutPopOverPage } from './logout-pop-over';

@NgModule({
  declarations: [
    LogoutPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(LogoutPopOverPage),
  ],
})
export class LogoutPopOverPageModule {}
