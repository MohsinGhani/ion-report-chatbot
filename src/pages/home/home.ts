import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Login } from '../login/login'
import { UsersService } from '../../providers/users-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  [x: string]: any;
  message: string;
  currentUser;
  userKey;
  conversation: FirebaseListObservable<any[]>;

  day = new Date().getDate()
  month = new Date().getMonth()
  year = new Date().getFullYear()
  currentDate = `${this.day}-${this.month}-${this.year}`

  constructor(public navCtrl: NavController,private _AngularFireDatabase: AngularFireDatabase, public _UsersService: UsersService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    this.userKey = localStorage.getItem('userKey')
    this.conversation = this._AngularFireDatabase.list(`/conversation/${this.userKey}`);
  }

  userLogout(){
    this._UsersService.logoutUser().then(() => {
      this.navCtrl.setRoot(Login)
    });
  }

  sendMessageOnEnter(event) {
    if (event.code === "Enter") {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage(){
    let send = { name: this.currentUser.name, imageUrl: '../assets/images/user.png', text: this.message }
    this._AngularFireDatabase.list(`/conversation/${this.userKey}`).push(send);
    this.message = '';
  }

}
