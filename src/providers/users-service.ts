import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Injectable()
export class UsersService {

  public fireAuth: any;
  public userProfile: any;
  users: FirebaseListObservable<any[]>;

  constructor(private _AngularFireDatabase: AngularFireDatabase) {
    this.users = this._AngularFireDatabase.list('/users');

    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
  }

SignUpUser(name:string,email:any, password:any){
    return this.fireAuth.createUserWithEmailAndPassword(email,password).then((newUser) => {
      // signIn the user
      this.fireAuth.signInWithEmailAndPassword(email,password).then((authUser) =>{
        //successfully login, create user profile
        this.userProfile.child(authUser.uid).set({
          email: email,
          name: name
        }).then(()=>{
          const user = this._AngularFireDatabase.list('/users', {
            query: {
              orderByChild: 'email',
              equalTo: email 
            }
          });
          user.subscribe((user)=>{
            localStorage.setItem('currentUser', user[0])
            localStorage.setItem('userKey', JSON.stringify(user[0].$key))
          })
        })
      });
    });
}

LoginUser(email: string,password:string): any{
    const user = this._AngularFireDatabase.list('/users', {
      query: {
        orderByChild: 'email',
        equalTo: email 
      }
    });
    user.subscribe((user)=>{
      localStorage.setItem('currentUser', JSON.stringify(user[0]))
      localStorage.setItem('userKey', JSON.stringify(user[0].$key))
    })
    return this.fireAuth.signInWithEmailAndPassword(email, password);
}

logoutUser(){
  localStorage.setItem('currentUser', null)
  localStorage.setItem('userKey', null)
  return this.fireAuth.signOut();
}


}
