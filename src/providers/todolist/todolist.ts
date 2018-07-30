
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



/*
  Generated class for the TodolistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodolistProvider {
  public arr: Array<{name:string, status: string}>;
  public
  constructor(private storage : Storage ) {
    console.log('Hello TodolistProvider Provider');
  }
 

//inputtask(task,taskid){
//  let item={task:task,taskid:0}
// this.storage.set(taskid.tostring(),JSON.stringify(item))
// this.storage.set(task.tostring(),JSON.stringify(item))
//}

settask() {
  this.storage.set('todo','#task');
};

gettask() {
 return this.storage.get('todo') 
};

}
