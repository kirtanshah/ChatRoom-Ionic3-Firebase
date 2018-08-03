import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {ChatPage} from '../chat/chat'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
  constructor(public navCtrl: NavController, private alertCtrl :AlertController) {

  }
  showAlert(a,b) {
    const alert = this.alertCtrl.create({
      title: a,
      subTitle: b,
      buttons: ['OK']
    });
    alert.present();
  }
login(){
if(/^[a-zA-Z0-9]+$/.test(this.username)){
	this.navCtrl.push(ChatPage,{
		username:this.username
	});

}else{
	this.showAlert('Error','Invalid Username')
}
}
}
