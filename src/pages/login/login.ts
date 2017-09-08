import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
//import { Registration } from '../registration/registration'
import { HomePage } from '../home/home'
import { UsersService } from '../../providers/users-service'

class CurrentUser {
  constructor(
        public name: string,
        public email: string,
        public password: string
    ) {}

}

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loginMode = true;

  user = new CurrentUser('','','');
  constructor(public navCtrl: NavController, public navParams: NavParams, public ModalCtrl:ModalController, public _UsersService: UsersService, public _LoadingController: LoadingController, public _AlertController:AlertController) {
  }

  submitLogin(){
    this._UsersService.LoginUser(this.user.email,this.user.password).then( authData => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      let alert = this._AlertController.create({
        title: 'SignIn Error',
        subTitle: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  Registration(){
    //let RegistrationModal = this.ModalCtrl.create(Registration);
    //RegistrationModal.present();
    this._UsersService.SignUpUser(this.user.name,this.user.email,this.user.password).then( authData => {
      this.navCtrl.setRoot(HomePage);
    }, err => {
      let alert = this._AlertController.create({
        title: 'SignUp Error',
        subTitle: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
}

}
