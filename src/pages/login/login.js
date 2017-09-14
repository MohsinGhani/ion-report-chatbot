var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
//import { Registration } from '../registration/registration'
import { HomePage } from '../home/home';
import { UsersService } from '../../providers/users-service';
var CurrentUser = (function () {
    function CurrentUser(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return CurrentUser;
}());
var Login = (function () {
    function Login(navCtrl, navParams, ModalCtrl, _UsersService, _LoadingController, _AlertController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ModalCtrl = ModalCtrl;
        this._UsersService = _UsersService;
        this._LoadingController = _LoadingController;
        this._AlertController = _AlertController;
        this.loginMode = true;
        this.user = new CurrentUser('', '', '');
    }
    Login.prototype.submitLogin = function () {
        var _this = this;
        this._UsersService.LoginUser(this.user.email, this.user.password).then(function (authData) {
            _this.navCtrl.setRoot(HomePage);
        }, function (err) {
            var alert = _this._AlertController.create({
                title: 'SignIn Error',
                subTitle: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    Login.prototype.Registration = function () {
        var _this = this;
        //let RegistrationModal = this.ModalCtrl.create(Registration);
        //RegistrationModal.present();
        this._UsersService.SignUpUser(this.user.name, this.user.email, this.user.password).then(function (authData) {
            _this.navCtrl.setRoot(HomePage);
        }, function (err) {
            var alert = _this._AlertController.create({
                title: 'SignUp Error',
                subTitle: err.message,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return Login;
}());
Login = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, ModalController, UsersService, LoadingController, AlertController])
], Login);
export { Login };
//# sourceMappingURL=login.js.map