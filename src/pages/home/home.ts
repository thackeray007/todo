import { Component } from '@angular/core';
import { NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { CompletedPage } from '../completed/completed';
import{Storage}from'@ionic/storage';
import { Vibration } from '@ionic-native/vibration';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public name:string;
  public status:number;
  public arr1:Array<{name:string,status:any}>=[];;
    
  public todoarray:any=[];
  public completedarray:any=[];

  constructor(private platform:Platform,public nav: NavController,private alertCTRL:AlertController,private toastC:ToastController,private localnotification:LocalNotifications  ,private vibration:Vibration ,navParams:NavParams ,storage:Storage) { 
    
    this.getvalue();
    console.log(this.todoarray.length);
    //console.log(this.arr1);
  //this.getit();
  this.todo();
  platform.registerBackButtonAction(() => {
  this.platform.exitApp();
    console.log("backPressed 1");
  },1);
  
  
  
  }
  
  getvalue(){
    this.todoarray=[];
    this.arr1=[];
    if(localStorage.getItem("name")!=null)
    {
      //console.log((localStorage.getItem("name")));

      this.arr1=JSON.parse(localStorage.getItem("name"));
    //console.log(this.arr1)
    }
  };
  //getit(){
  //  var i:number;  
//for(i=0;i=this.arr1.length;i++){
  
  //console.log(this.arr1[3].status);
//  if( this.arr1[i].status=='0')
//{
//this.todoarray.push(this.arr1[i]);
//console.log(this.todoarray);
//}}
//}
todo(){this.todoarray=[];
  this.arr1; 
  var i:number;
  for(i=0;i<this.arr1.length;i++){
    if(this.arr1[i].status=="0"){
      var k={name:this.arr1[i].name,status:'0'};
      this.todoarray.push(k)
    }
    //console.log(this.todoarray.length);
    
//console.log(this.todoarray);

  }

}
complete(todo){var i:number;
  for(i=0;i<this.arr1.length;i++){
    if(this.arr1[i].name==todo.name){
      var k={name:this.arr1[i].name,status:'1'};
      this.arr1.splice(i, 1);
    this.arr1.push(k);  
    //console.log(this.arr1);
    
      //this.arr1[i].status="2";
    } localStorage.setItem("name",JSON.stringify(this.arr1));
  } this.getvalue();
    this.todo(); 
    this.gotocompleted();
    this.vibration.vibrate(1000);
    
 
  //console.log(this.arr1);
  

}
delete1(todo){
  this.alert2(todo);
}

delete(todo){
  var i:number;
  for(i=0;i<this.arr1.length;i++){
    if(this.arr1[i].name==todo.name){
      var k={name:this.arr1[i].name,status:'2'};
      this.arr1.splice(i, 1);
    this.arr1.push(k);  
    //console.log(this.arr1);
    
      //this.arr1[i].status="2";
    } localStorage.setItem("name",JSON.stringify(this.arr1));
    this.getvalue();
    this.todo();
    this.gotocompleted();
    this.beep();
  }
  //console.log(this.arr1);
  

}
completed(){
  
  var i:number;
  for(i=0;i<this.arr1.length;i++){
    


    }
}


  gotoadd(){
    this.nav.setRoot(AddPage)
  }
  gotocompleted(){
    console.log(this.todoarray.length);
    var i:number;
    this.completedarray=[];
    for(i=0;i<this.arr1.length;i++){
      if(this.arr1[i].status=="1"){
        var k={name:this.arr1[i].name,status:'1'};
        this.completedarray.push(k)
      }}
    if(this.todoarray.length==undefined || this.todoarray.length=='0' ){
      this.presentToast1();
      {if(this.completedarray.length==undefined || this.completedarray.length=='0'){
      
      this.nav.setRoot(AddPage)}else{this.nav.setRoot(CompletedPage)}}
      }
  }
 // task1(){
    // storage.get('title1').then((val) => {
      //  console.log(val);
   //}
 // }
 beep(){
  this.localnotification.schedule({
    id: 1,
    text: 'DELETED',
    //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    data: { secret:"DELETED" }
  });
}
presentToast1() {
  const toast = this.toastC.create({
    message: 'no pending item',
    duration: 3000
  });
  toast.present();
}
alert2(todo){
  let alert=this.alertCTRL.create({
    title : 'delete',
    message : 'do you want to delete this task' ,
    buttons : [{
      text: 'delete',
      handler: data => {
        this.delete(todo);
        
      }
    },'cancel']

  });
alert.present();
}
}
