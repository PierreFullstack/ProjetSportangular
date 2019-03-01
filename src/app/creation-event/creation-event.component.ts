import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  Sports = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/sports').subscribe(
      reponse => {
        //console.log(reponse.json());
        reponse.json().forEach(element => {
          this.Sports.push(element);
        });
        console.log(this.Sports);
      }
    );
  }

}
