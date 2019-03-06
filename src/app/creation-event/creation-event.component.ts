import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Evenement } from '../Evenement';
import { Router } from '@angular/router';
import { UsercoService } from './../userco.service';


@Component({
  selector: 'app-creation-event',
  templateUrl: './creation-event.component.html',
  styleUrls: ['./creation-event.component.css']
})
export class CreationEventComponent implements OnInit {

  Sports = [];
  event : Evenement = new Evenement();
  tousEvents;
  show = false;
  message;

  constructor(private router: Router,
    private http: Http,
    private myservice: UsercoService) { }

  ngOnInit() {
    this.myservice.show();
    this.http.get('http://localhost:8080/sports').subscribe(
      reponse => {
        //console.log(reponse.json());
        reponse.json().forEach(element => {
          this.Sports.push(element);
        });
        // console.log(this.Sports);
      }
    );
  }

  insertEvent() {
    this.event.createur=this.myservice.user;
    if (this.event.createur.id == null ){   // met martin par défaut si pas de user connecté
      this.event.createur.id = 1;
    }
    if(this.event.titre == null || this.event.dateEvent == null || this.event.horaire == null || this.event.sport == null){
      this.message = "Merci de compléter tous les champs obligatoires";
      this.show = true;
    }
    else {
    console.log("event qui va être créé", this.event);
    this.http.post('http://localhost:8080/event',this.event).subscribe(data=>{
      console.log(data);
    }, err=>{
      console.log(err);
    })
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
    })
    this.router.navigate(['/afficheevent']);
    }
}

}
