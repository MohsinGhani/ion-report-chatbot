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
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        // afAuth.authState.subscribe((user: firebase.User) => this.currentUser = user);
        var _this = this;
        this.afAuth = afAuth;
        this.rootPage = TabsPage;
        //check the user is logged in or not
        afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = TabsPage;
            }
            else {
                _this.rootPage = Login;
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, AngularFireAuth])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map