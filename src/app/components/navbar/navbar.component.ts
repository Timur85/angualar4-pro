import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private firebaseService: FirebaseService) {
    this.user = this.afAuth.authState;
    this.afAuth.auth.signInAnonymously();
  }

  ngOnInit() {
  }

  login() {
    this.firebaseService.getUserList().subscribe(users => {
      this.user = users;
      console.log(users);
    });
  }

  logout() {

  }

}
