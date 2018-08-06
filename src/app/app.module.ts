import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController, NavParams } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapsPage } from '../pages/maps/maps';
import{ IonicStorageModule } from'@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddPage } from '../pages/add/add';
import { CompletedPage } from '../pages/completed/completed';
import { TodolistProvider } from '../providers/todolist/todolist';
import { ConnectivityyServiceProvider } from '../providers/connectivityy-service/connectivityy-service';
import {Geolocation} from '@ionic-native/geolocation';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPage,
    CompletedPage,
    ListPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    CompletedPage,
    HomePage,
    ListPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodolistProvider,
    ConnectivityyServiceProvider,
    LocalNotifications,
    Vibration,
    
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {
}
