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
  event : Evenement = new Evenement(); // récupérer l'événement sur lequel on souhaite s'inscrire
  eventbis : Evenement = new Evenement(); // On récupère l'event après insertion de la participation dans la BD
  participation;
  listeParticipants;
  location;
  monurl = 'http://localhost:8080/event/';

  constructor(private router: Router, 
    private http: Http,
    private myservice: UsercoService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
    })
  }
    /*
    this.http.get('http://localhost:8080/event/nbrparticipants').subscribe(
      reponse =>{
        this.listeParticipants=reponse.json();
        // il faut compter le créateur comme participant
        console.log(this.listeParticipants);
        console.log(this.listeParticipants[1])
      }
    ) */
    // Tester le nombre de participants dans les événement



  participer(eve){
    this.event = eve;
    this.participation = new Participation(this.event, this.myservice.user);
    // console.log(this.participation);
    this.http.post('http://localhost:8080/participation',this.participation).subscribe(data=>{
    //  console.log(data);
    }, err=>{
      console.log(err);
  })

  this.http.get(this.monurl+this.event.id).subscribe(reponse => {
      this.eventbis=reponse.json();     // on récupère les infos de l'event après MAJ de la participation
      if (this.eventbis.nbrParticipants==(this.eventbis.sport.nbrMax-1)){
        console.log("event à fermer")
        console.log(this.eventbis);
      }
  });


  this.http.get('http://localhost:8080/event').subscribe(
    reponse => {
      this.tousEvents=reponse.json();
  })
  this.router.navigate(['/afficheevent']);
  }


}
