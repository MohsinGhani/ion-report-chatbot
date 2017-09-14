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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersService } from '../../providers/users-service';
import { Login } from '../login/login';
var UserProfile = (function () {
    function UserProfile(navCtrl, navParams, _UsersService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._UsersService = _UsersService;
    }
    UserProfile.prototype.userLogout = function () {
        var _this = this;
        this._UsersService.logoutUser().then(function () {
            _this.navCtrl.setRoot(Login);
        });
    };
    return UserProfile;
}());
UserProfile = __decorate([
    IonicPage(),
    Component({
        selector: 'page-user-profile',
        templateUrl: 'user-profile.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, UsersService])
], UserProfile);
export { UserProfile };
//# sourceMappingURL=user-profile.js.map