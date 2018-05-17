import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadedFeature = '';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC4aIa6aNMRBmYbsPyZZk4ZQpzox5gjjHg',
    authDomain: 'ng-recipe-book-jay.firebaseapp.com',
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
