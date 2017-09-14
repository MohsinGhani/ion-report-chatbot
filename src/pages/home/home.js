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
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Login } from '../login/login';
import { UsersService } from '../../providers/users-service';
var HomePage = (function () {
    function HomePage(navCtrl, _AngularFireDatabase, _UsersService) {
        this.navCtrl = navCtrl;
        this._AngularFireDatabase = _AngularFireDatabase;
        this._UsersService = _UsersService;
        this.day = new Date().getDate();
        this.month = new Date().getMonth();
        this.year = new Date().getFullYear();
        this.currentDate = this.day + "-" + this.month + "-" + this.year;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        this.userKey = localStorage.getItem('userKey');
        this.conversation = this._AngularFireDatabase.list("/conversation/" + this.userKey);
    }
    HomePage.prototype.userLogout = function () {
        var _this = this;
        this._UsersService.logoutUser().then(function () {
            _this.navCtrl.setRoot(Login);
        });
    };
    HomePage.prototype.sendMessageOnEnter = function (event) {
        if (event.code === "Enter") {
            event.preventDefault();
            this.sendMessage();
        }
    };
    HomePage.prototype.sendMessage = function () {
        var send = { name: this.currentUser.name, imageUrl: '../assets/images/user.png', text: this.message };
        this._AngularFireDatabase.list("/conversation/" + this.userKey).push(send);
        this.message = '';
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, AngularFireDatabase, UsersService])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map