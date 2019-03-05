import { Component, OnInit } from '@angular/core';
import { Evenement } from '../Evenement';
import { Http } from '@angular/http';
import { User } from '../User';
import { ZoomeventService } from '../zoomevent.service';

@Component({
  selector: 'app-zoom-event',
  templateUrl: './zoom-event.component.html',
  styleUrls: ['./zoom-event.component.css']
})
export class ZoomEventComponent implements OnInit {

  event : Evenement = new Evenement;
  createur : User = new User;
  Participants;
  id;
 

  constructor(private http: Http,
    private myservice: ZoomeventService) { }

  ngOnInit() {

    this.id = this.myservice.idEvent;

    this.http.get('http://localhost:8080/event/'+this.id).subscribe(
      reponse => {
        this.event=reponse.json();
        this.createur = this.event.createur;
    })

    this.http.get('http://localhost:8080/listeparticipantsevent/'+this.id).subscribe(
      reponse => {
        this.Participants=reponse.json();
    })

    
  }

}
