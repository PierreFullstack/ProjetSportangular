import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-affiche-event',
  templateUrl: './affiche-event.component.html',
  styleUrls: ['./affiche-event.component.css']
})
export class AfficheEventComponent implements OnInit {

  tousEvents;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
  }
  )}

}
