import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../User';
import { Evenement } from '../Evenement';
import { Participation } from '../Participation';

@Component({
  selector: 'app-affiche-event',
  templateUrl: './affiche-event.component.html',
  styleUrls: ['./affiche-event.component.css']
})
export class AfficheEventComponent implements OnInit {

  tousEvents;
  userconnect : User = new User(); // il faudrait récupérer le user de la session en cours
  event : Evenement = new Evenement(); // récupérer l'événement sur lequel on souhaite s'inscrire
  participation : Participation = new Participation();

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
    })
    this.http.get('http://localhost:8080/user/1').subscribe(
      reponse => {
        this.userconnect=reponse.json();
    })

    // Tester le nombre de participants dans les événements
  }

  participer(eve){
    console.log(eve)
    this.event = eve;
    this.participation
    this.http.post('http://localhost:8080/participation',this.event).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
  })
  }
  

}
