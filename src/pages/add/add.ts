import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodolistProvider } from '../../providers/todolist/todolist';
import{Storage}from'@ionic/storage';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
public dataToStore:string;
public title1:string="todo";
public arr1: Array<{"name":string}>;
public x1:any;
//public x1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage:Storage
  ) {
    //this.getvalue();
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  getvalue(){
    if(localStorage.getItem('name')!=null)
    {
      this.arr1=JSON.parse(localStorage.getItem('name'));
    }
  };

  setvalue(){
    this.x1={name:this.dataToStore}
    console.log(this.x1);
   // this.arr1.push(this.x1);
   this.arr1.push()
   console.log(this.arr1);
    
   // localStorage.setItem("name",JSON.stringify(this.arr));
    
    //TodolistProvider.arr=JSON.parse(localStorage.setItem("name", JSON.stringify(this.title1)));
    //this.storage.set(this.title1,this.dataToStore).then((successdata)=>{
      //console.log("data stored"),
      //console.log(successdata)
    //})
};
  }



