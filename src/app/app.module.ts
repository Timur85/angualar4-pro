import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomeComponent } from './components/home/home.component';
import { TimemanageComponent } from './components/timemanage/timemanage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditTmanageComponent } from './components/edit-tmanage/edit-tmanage.component';
import { AddTmanageComponent } from './components/add-tmanage/add-tmanage.component';
import { RouterModule, Routes } from '@angular/router';
import { TimemanagesComponent } from './components/timemanages/timemanages.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LocalStorageModule } from 'angular-2-local-storage';


export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA9sf471S4ufadDhc-HlaJEkEKrHXvRGPE',
    authDomain: 'tmng-2a0ed.firebaseapp.com',
    databaseURL: 'https://tmng-2a0ed.firebaseio.com',
    projectId: 'tmng-2a0ed',
    storageBucket: 'tmng-2a0ed.appspot.com',
    messagingSenderId: '22538117362'
  }
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tmanagments', component: TimemanagesComponent},
  {path: 'add-tmanage', component: AddTmanageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimemanageComponent,
    NavbarComponent,
    EditTmanageComponent,
    AddTmanageComponent,
    TimemanagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
