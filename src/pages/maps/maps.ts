import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import{Storage}from'@ionic/storage';
import{Platform} from'ionic-angular';
import { HomePage } from '../home/home';
declare var google;
/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
@ViewChild('map') mapElement:ElementRef;
map:any;
//latLong:any=[19.1379937,73.0109981];
  constructor(public navCtrl: NavController,platform:Platform, public navParams: NavParams,public storage:Storage,private geolocation:Geolocation) {
    this.loadmap();
    this.marker();
    platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(HomePage)
      console.log("backPressed 1");
    },1);
  }


  ionViewDidLoad() {
    this.loadmap();
    console.log('ionViewDidLoad MapsPage');
  
  }

  loadmap(){
    this.geolocation.getCurrentPosition().then((postion)=>{
      var latLng=new google.maps.LatLng(postion.coords.latitude,postion.coords.longitude);
      let mapOptions={
        center :latLng,
        zoom:15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      } 
      this.map=new google.maps.Map(this.mapElement.nativeElement,mapOptions)
      var marker = new google.maps.Marker({
        map:this.map,
        animation:google.maps.Animation.DROP,
        position:latLng,
   });
    }, (err)=>{
      console.log(err);
      //this.marker();
    });
    
  }
   addMarker(){var latlng:any;
    this.geolocation.getCurrentPosition().then((postion)=>{
     var latLng=new google.maps.LatLng(postion.coords.latitude,postion.coords.longitude);
    localStorage.setItem("latlng",JSON.stringify(latLng));
    })
 this.marker();
  }
   
   marker(){var latlng:any;
   
    latlng=JSON.parse(localStorage.getItem("latlng"));
    console.log('a');
    
    console.log(latlng);
    


     let marker = new google.maps.Marker({
    map:this.map,
    animation:google.maps.Animation.DROP,
    position:latlng,  
     });
     let content='you are here';
     this.addinfowindow(marker,content);
   }
   addinfowindow(marker,content){
     let infowindow=new google.maps.InfoWindow({
       content:content,
     });
     google.maps.event.addListener(marker, 'click',()=>{
       infowindow.open(this.map,marker);
     
      });

   
 }
}