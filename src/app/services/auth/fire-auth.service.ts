import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {

  isAllowedUser = new Subject<any>();
  constructor(
    private auth: AngularFireAuth,
    private route: Router,
    private afs: AngularFirestore
  ) {}

  async googleSignin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    this.auth.signInWithPopup(provider).then((userdata) => {
      this.updateUserInDb(userdata);
      window.localStorage.setItem('tokenId', JSON.stringify( userdata.credential["accessToken"]));
      this.route.navigate(['/home']);
      
    }).catch((error) => {
       console.log(error);
       this.isAllowedUser.next(true);
    });
  }


updateUserInDb(userObj){
  this.afs
  .doc(`users/${userObj.user.uid}`)
  .set({
    fname: userObj.user.displayName.split(' ')[0],
    lname: userObj.user.displayName.split(' ')[1],
    email: userObj.user.email,
    age: userObj.user.uid,
    pic: userObj.user.photoURL,
  });
}

}