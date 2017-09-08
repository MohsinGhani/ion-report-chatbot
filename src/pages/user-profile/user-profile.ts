import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../providers/users-service'
import { Login } from '../login/login'

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfile {

  constructor(public navCtrl: NavController, public navParams: NavParams, public _UsersService:UsersService) {
  }

  userLogout(){
    this._UsersService.logoutUser().then(() => {
      this.navCtrl.setRoot(Login)
    });
  }

}
