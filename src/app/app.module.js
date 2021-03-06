var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { UserProfile } from '../pages/user-profile/user-profile';
import { UsersService } from '../providers/users-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
var config = {
    apiKey: "AIzaSyDu8oaQPMb1Hn8Lu7q0MfMeaUtjzsvCCRo",
    authDomain: "standup-report-chatbot.firebaseapp.com",
    databaseURL: "https://standup-report-chatbot.firebaseio.com",
    projectId: "standup-report-chatbot",
    storageBucket: "standup-report-chatbot.appspot.com",
    messagingSenderId: "155594024257"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            Login,
            UserProfile
        ],
        imports: [
            BrowserModule,
            IonicModule.forRoot(MyApp),
            AngularFireModule.initializeApp(config),
            AngularFireDatabaseModule,
            AngularFireAuthModule,
            HttpModule
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            MyApp,
            AboutPage,
            ContactPage,
            HomePage,
            TabsPage,
            Login,
            UserProfile
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            UsersService
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map