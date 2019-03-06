import { Component, OnInit } from '@angular/core';
import { Evenement } from '../Evenement';
import { Http } from '@angular/http';
import { User } from '../User';
import { ZoomeventService } from '../zoomevent.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

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
  modeSuppr = false;
  confirmationSuppr;
 

  constructor(private http: Http,
    private myservice: ZoomeventService,
    public dialogRef : MatDialogRef<ZoomEventComponent>,
    private router: Router) { }

  ngOnInit() {

    this.id = this.myservice.idEvent;
    this.modeSuppr = this.myservice.modeSuppr;
    console.log(this.modeSuppr);

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
        //console.log(this.confirmationSuppr);
      }
    )

    this.http.delete('http://localhost:8080/supprparticipations/event/'+event.id).subscribe(
      reponse => {
        this.confirmationSuppr = reponse.json();
        //console.log(this.confirmationSuppr);
      }
    )
    this.myservice.modeSupprOff();
    this.dialogRef.close();
    this.router.navigate(['/afficheevent']);
  }

  onNoClick(){
    this.myservice.modeSupprOff();
    this.dialogRef.close();
  }

}
