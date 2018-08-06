import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TodolistProvider } from '../../providers/todolist/todolist';
import{Storage}from'@ionic/storage';
import { HomePage } from '../home/home';
import{ToastController}from 'ionic-angular';
import{Platform}from'ionic-angular';

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
public arr1:any=[];
public x1:any;
//public x1:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage:Storage,public toastcontroller:ToastController,private platform:Platform
  ) {
    this.getvalue();
    platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage)
      console.log("backPressed 1");
    },1);
  }

  presentToast() {
    const toast = this.toastcontroller.create({
      message: "can't  add blank todo"  ,
      duration: 3000
    });
    toast.present();
  }


  ionViewDidLoad() {
     console.log('ionViewDidLoad AddPage');
  }
  getvalue(){
    this.arr1=[];
  if(localStorage.getItem("name")!=undefined)
    {this.arr1=[];
      this.arr1=JSON.parse(localStorage.getItem("name"));
     }
     console.log(this.arr1);
     
  };

  setvalue(){
    console.log(this.dataToStore);
    if(this.dataToStore=='' || this.dataToStore==null){this.presentToast();}
    else{
    this.x1={name:this.dataToStore,status:'0'}
    console.log(this.x1);
    console.log(this.arr1);
    this.arr1.push(this.x1);

    console.log(this.arr1);
    
    localStorage.setItem("name",JSON.stringify(this.arr1));
    this.gotohome();
    
    //TodolistProvider.arr=JSON.parse(localStorage.setItem("name", JSON.stringify(this.title1)));
    //this.storage.set(this.title1,this.dataToStore).then((successdata)=>{
      //console.log("data stored"),
      //console.log(successdata)
    //})
  }
};
gotohome(){
  this.navCtrl.setRoot(HomePage)
}
  }



