import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class FirebaseService {

  user: Observable<firebase.User>;
  items: any;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.user = this.afAuth.authState;
  }

  getUserList() {
    this.items = this.af.list('/users') as FirebaseListObservable<any[]>;
    return this.items;
  }
}

interface UserList {
  $key?: number;
  fio?: string;
  email?: string;
  access?: number;
  user?: string;
}
