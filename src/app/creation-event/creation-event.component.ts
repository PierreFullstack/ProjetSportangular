import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Evenement } from '../Evenement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  Sports = [];
  event : Evenement = new Evenement();

  constructor(private router: Router,
    private http: Http) { }

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

  insertEvent() {
    console.log(this.event);
    this.http.post('http://localhost:8080/event',this.event).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
  })
  this.router.navigate(['/afficheevent']);
  }

}
