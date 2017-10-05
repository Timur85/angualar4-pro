import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-timemanages',
  templateUrl: './timemanages.component.html',
  styleUrls: ['./timemanages.component.css']
})
export class TimemanagesComponent implements OnInit {
  manage: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    /*this.firebaseService.getTManage().subscribe(manage => {
        console.log(manage);
        this.manage = manage;
    });*/
  }

}
