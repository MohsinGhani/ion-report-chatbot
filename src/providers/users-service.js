var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
var UsersService = (function () {
    function UsersService(_AngularFireDatabase) {
        this._AngularFireDatabase = _AngularFireDatabase;
        this.users = this._AngularFireDatabase.list('/users');
        this.fireAuth = firebase.auth();
        this.userProfile = firebase.database().ref('users');
    }
    UsersService.prototype.SignUpUser = function (name, email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            // signIn the user
            _this.fireAuth.signInWithEmailAndPassword(email, password).then(function (authUser) {
                //successfully login, create user profile
                _this.userProfile.child(authUser.uid).set({
                    email: email,
                    name: name
                }).then(function () {
                    var user = _this._AngularFireDatabase.list('/users', {
                        query: {
                            orderByChild: 'email',
                            equalTo: email
                        }
                    });
                    user.subscribe(function (user) {
                        localStorage.setItem('currentUser', user[0]);
                        localStorage.setItem('userKey', JSON.stringify(user[0].$key));
                    });
                });
            });
        });
    };
    UsersService.prototype.LoginUser = function (email, password) {
        var user = this._AngularFireDatabase.list('/users', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        });
        user.subscribe(function (user) {
            localStorage.setItem('currentUser', JSON.stringify(user[0]));
            localStorage.setItem('userKey', JSON.stringify(user[0].$key));
        });
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    UsersService.prototype.logoutUser = function () {
        localStorage.setItem('currentUser', null);
        localStorage.setItem('userKey', null);
        return this.fireAuth.signOut();
    };
    return UsersService;
}());
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [AngularFireDatabase])
], UsersService);
export { UsersService };
//# sourceMappingURL=users-service.js.map