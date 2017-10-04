import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { TimelistComponent } from './timelist/timelist.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyDX2hMrM0MZ9MPutrJunl7hiPbFvS5JvXU',
  authDomain: 'tmanage-ef2a1.firebaseapp.com',
  databaseURL: 'https://tmanage-ef2a1.firebaseio.com',
  projectId: 'tmanage-ef2a1',
  storageBucket: 'tmanage-ef2a1.appspot.com',
  messagingSenderId: '566620288143'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    TimelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
