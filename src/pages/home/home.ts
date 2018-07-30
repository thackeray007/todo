import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddPage } from '../add/add';
import { CompletedPage } from '../completed/completed';
import{Storage}from'@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public itmem=[];

  constructor(public nav: NavController ,navParams:NavParams ,storage:Storage) {
  }
  
  gotoadd(){
    this.nav.push(AddPage)
  }
  gotocompleted(){
    this.nav.push(CompletedPage)
  }
  task1(){
    // storage.get('title1').then((val) => {
      //  console.log(val);
   //}
  }
}
