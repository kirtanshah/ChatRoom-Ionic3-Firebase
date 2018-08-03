import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {ChatPage} from '../pages/chat/chat'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

  var config = {
    apiKey: "AIzaSyD75AWCPgUV4RPNGnollQzjXKC4prmuguE",
    authDomain: "ionic-chat-starter-3dde1.firebaseapp.com",
    databaseURL: "https://ionic-chat-starter-3dde1.firebaseio.com",
    projectId: "ionic-chat-starter-3dde1",
    storageBucket: "ionic-chat-starter-3dde1.appspot.com",
    messagingSenderId: "665524081312"
  };
//firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
