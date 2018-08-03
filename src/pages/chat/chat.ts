import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
username:string;
message:string='';
s;
messages:any=[];
  constructor(public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {
  console.log(this.navParams);
  this.username=this.navParams.get('username');

  /*this.s=this.db.list('/chat/').subscribe(data=>{
    console.log(data);
    this.messages=data;
  })*/
    this.s=this.db.list('/chat').valueChanges().subscribe(data=>{
      //console.log(data.json());
      this.messages=data;
      //console.log(data);

    });

  //this.message="Type here"
  }
  SendMessage(){
    this.db.list('/chat').push({
      username:this.username,
      message:this.message
    })/*.then(()=>{
      //message is sent
    }).catch(()=>{
      //firebase error
    })*/
    this.message='';  
    //console.log(this.db.list)
  }
ionViewWillLeave(){
  console.log('User is about to go')
  this.s.unsubscribe();
  this.db.list('/chat').push({
    specialMessage:true,
    message:`${this.username} has left the room`
  })
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.db.list('/chat').push({
    specialMessage:true,
    message:`${this.username} has join the room`
  })
  }
  

}
