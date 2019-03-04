import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../User';
import { Evenement } from '../Evenement';
import { Participation } from '../Participation';
import { Router } from '@angular/router';
import { UsercoService } from './../userco.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { ZoomEventComponent } from '../zoom-event/zoom-event.component';
import { ZoomeventService } from '../zoomevent.service';


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
    private myservice: UsercoService,
    public dialog: MatDialog,
    private myservice2: ZoomeventService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
    })
  }

  

  participer(eve){
    this.event = eve;
    this.participation = new Participation(this.event, this.myservice.user);
    console.log(this.participation);
    this.http.post('http://localhost:8080/participation',this.participation).subscribe(data=>{
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


  openDialog(id): void {
    const dialogConfig = new MatDialogConfig();

    console.log(id);
    this.myservice2.choixEvent(id);

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ZoomEventComponent, dialogConfig);
  }
  

}