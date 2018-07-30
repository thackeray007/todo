import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicStoragePage } from './ionic-storage';

@NgModule({
  declarations: [
    IonicStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(IonicStoragePage),
  ],
})
export class IonicStoragePageModule {}
