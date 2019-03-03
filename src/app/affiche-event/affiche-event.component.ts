import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../User';
import { Evenement } from '../Evenement';
import { Participation } from '../Participation';
import { Router } from '@angular/router';
import { UsercoService } from './../userco.service';

@Component({
  selector: 'app-affiche-event',
  templateUrl: './affiche-event.component.html',
  styleUrls: ['./affiche-event.component.css']
})
export class AfficheEventComponent implements OnInit {

  tousEvents;
  userconnect : User = new User(); 
  event : Evenement = new Evenement(); // récupérer l'événement sur lequel on souhaite s'inscrire
  participation;
  listeParticipants;
  location;
  

  constructor(private router: Router, 
    private http: Http,
    private myservice: UsercoService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
    })

    this.userconnect = this.myservice.user;

    this.http.get('http://localhost:8080/event/nbrparticipants').subscribe(
      reponse =>{
        this.listeParticipants=reponse.json();
        console.log(this.listeParticipants);
        console.log(this.listeParticipants[1])
      }
    )
    // Tester le nombre de participants dans les événements
  }

  participer(eve){
    this.event = eve;
    this.participation = new Participation(this.event, this.userconnect);
    console.log(this.participation);
    this.http.post('http://localhost:8080/participation',this.participation).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
  })
  this.location = '';
  }
  
}
