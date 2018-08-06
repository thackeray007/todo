import { Component } from '@angular/core';
import {AlertController,IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import{Storage}from'@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BoundElementPropertyAst } from '../../../node_modules/@angular/compiler';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
/**
 * Generated class for the CompletedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completed',
  templateUrl: 'completed.html',
})
export class CompletedPage {
  public arr1:Array<{name:string,status:any}>;
  public completedarray:any=[name,status];
  public todoarray:any=[name,status];
public x1:any;

  constructor(public navCtrl: NavController,platform:Platform,private localNotifications: LocalNotifications, public navParams: NavParams,storage:Storage,private alertCTRL:AlertController,public toastCtrl:ToastController) {
  this.getvalue1();
  this.complete();
  
  platform.registerBackButtonAction(() => {
    this.navCtrl.setRoot(HomePage)
    console.log("backPressed 1");
  },1);
  }
  getvalue1(){
    if(localStorage.getItem("name")!=null)
    {this.arr1=[];
      this.arr1=JSON.parse(localStorage.getItem("name"));
    console.log(this.arr1)
    }
  };
  complete(){
    
  
    var i:number;
    this.completedarray=[];
    for(i=0;i<this.arr1.length;i++){
      if(this.arr1[i].status=="1"){
        var k={name:this.arr1[i].name,status:'1'};
        this.completedarray.push(k)
      }
      //console.log(this.completedarray.length);
      
  //console.log(this.completedarray);
  
    }}
    delete(complete){if(this.completedarray.length=='1'){
      this.alert1();

    }else{this.alert3(complete)}}
      
     del1(complete){{var i:number;
      for(i=0;i<this.arr1.length;i++){
      
        if(this.arr1[i].name==complete.name){
          var k={name:this.arr1[i].name,status:'2'};
          this.arr1.splice(i, 1);
        this.arr1.push(k);  
        console.log(this.arr1);
        
          //this.arr1[i].status="2";
        } localStorage.setItem("name",JSON.stringify(this.arr1));
        this.getvalue1();
        this.complete();
        this.beep();
      }
      
      
      console.log(this.arr1);
      

    }}
    alert1(){
      let alert=this.alertCTRL.create({
        title : 'delete',
        message : 'can not delete single completed to-do item' ,
        buttons : ['ok']

      });
    alert.present();
    }
    alert2(){
      let alert=this.alertCTRL.create({
        title : 'delete the list',
        message : 'you have completed all task' ,
        buttons : [{
          text: 'delete',
          handler: data => {
            this.deleteall();
            
          }
        },'cancel']

      });
    alert.present();
    }
    setvalue(){
     // this.x1={name:this.dataToStore,status:'0'}
     // console.log(this.x1);
     // console.log(this);
      //this.arr1.push(this.x1);
  
      //console.log(this.arr1);
      
      //localStorage.setItem("name",JSON.stringify(this.arr1));
      
      //TodolistProvider.arr=JSON.parse(localStorage.setItem("name", JSON.stringify(this.title1)));
      //this.storage.set(this.title1,this.dataToStore).then((successdata)=>{
        //console.log("data stored"),
        //console.log(successdata)
      //})
  };
deleteall(){
  console.log("asdhgg");
  
  if(this.completedarray.length=='1'){
    this.presentToast();
  }else{var j,i:number;
    for(i=0;i<this.arr1.length;i++){
      for(j=0;j<this.completedarray.length;j++){
        if(this.arr1[i].name==this.completedarray[j].name){
          var k={name:this.arr1[i].name,status:'2'};
          this.arr1.splice(i, 1);
        this.arr1.push(k);  
        console.log(this.arr1);
        
          //this.arr1[i].status="2";
        } 
        
      }
      localStorage.setItem("name",JSON.stringify(this.arr1));}
    this.getvalue1();
    this.complete();
    this.beep();
  }
}
promt1(){if(this.completedarray.length==undefined||this.completedarray.length=='0'){}else{
  this.todoarray=[];
  this.arr1; 
  var i:number;
  {for(i=0;i<this.arr1.length;i++){
    if(this.arr1[i].status=="0"){
      var k={name:this.arr1[i].name,status:'0'};
      this.todoarray.push(k)
    }else{}}};}this.a1()}

    a1(){if(this.todoarray.length!='1' && this.todoarray.length=='0' ){

      this.alert2();
    
    //console.log(this.todoarray.length);
    }
//console.log(this.todoarray);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedPage');
    this.promt1();
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'you need to complete more taskkksss',
      duration: 3000
    });
    toast.present();
  }

  beep(){
    this.localNotifications.schedule({
      id: 1,
      text: 'DELETED',
     // sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      data: { secret:"DELETED" }
    });
  }
  alert3(complete){
    let alert=this.alertCTRL.create({
      title : 'delete',
      message : 'do you want to delete this task' ,
      buttons : [{
        text: 'delete',
        handler: data => {
          this.del1(complete);
          
        }
      },'cancel']
  
    });
  alert.present();
  }
}

