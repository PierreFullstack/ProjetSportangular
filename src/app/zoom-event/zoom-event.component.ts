import { Component, OnInit } from '@angular/core';
import { Evenement } from '../Evenement';
import { Http } from '@angular/http';
import { User } from '../User';
import { ZoomeventService } from '../zoomevent.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { UsercoService } from '../userco.service';
import { Participation } from '../Participation';
import { ParticipationService } from '../participation.service';

@Component({
  selector: 'app-zoom-event',
  templateUrl: './zoom-event.component.html',
  styleUrls: ['./zoom-event.component.css']
})
export class ZoomEventComponent implements OnInit {

  event : Evenement = new Evenement;
  createur : User = new User;
  user : User = new User;
  participation;
  idParticipation;
  participationId : number;
  Participants;
  id;
  modeSuppr = false;
  modeDeparticiper = false;
  confirmationSuppr;
 

  constructor(private http: Http,
    private myservice: ZoomeventService,
    private myservice2: UsercoService,
    private myservice3: ParticipationService,
    public dialogRef : MatDialogRef<ZoomEventComponent>,
    private router: Router) { }

  ngOnInit() {

    this.user = this.myservice2.user;
    this.id = this.myservice.idEvent;
    this.idParticipation = this.myservice3.idParticipation;
    this.modeSuppr = this.myservice.modeSuppr;
    this.modeDeparticiper = this.myservice.modeDeparticiper;

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

  supprEvent(event){
    this.http.delete('http://localhost:8080/event/'+event.id).subscribe(
      reponse => {
        this.confirmationSuppr = reponse.json();
      })
    this.http.delete('http://localhost:8080/supprparticipations/event/'+event.id).subscribe(
        reponse => {
          this.confirmationSuppr = reponse.json();
          this.myservice.modeSupprOff();
          this.dialogRef.close();
          this.router.navigate(['/afficheevent']);
      })
  }

  quitterEvent(event){
    this.http.get('http://localhost:8080/participation/user/'+this.myservice2.user.id+'/event/'+event.id).subscribe(
      reponse => {
        this.participation=reponse.json();
        this.myservice3.choixparticipation(this.participation.id);
    this.http.delete('http://localhost:8080/participation/'+this.myservice3.idParticipation).subscribe(
      reponse => {
        this.confirmationSuppr = reponse.json();
        //console.log(this.confirmationSuppr);
        this.myservice.modeDeparticiperOff();
        this.dialogRef.close();
        this.router.navigate(['/afficheevent']);
      })
    })
  }

  onNoClick(){
    this.myservice.modeSupprOff();
    this.myservice.modeDeparticiperOff();
    this.dialogRef.close();
  }

}
