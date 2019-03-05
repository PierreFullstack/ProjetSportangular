import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsercoService } from '../userco.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ZoomeventService } from '../zoomevent.service';
import { ZoomEventComponent } from '../zoom-event/zoom-event.component';
import { ModifEventComponent } from '../modif-event/modif-event.component';

@Component({
  selector: 'app-affiche-mes-events',
  templateUrl: './affiche-mes-events.component.html',
  styleUrls: ['./affiche-mes-events.component.css']
})
export class AfficheMesEventsComponent implements OnInit {

  mesEvents;
  confirmationSuppr = false;

  constructor(private router: Router, 
    private http: Http,
    private myservice: UsercoService,
    public dialog: MatDialog,
    private myservice2: ZoomeventService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/meseventcree/'+this.myservice.user.id).subscribe(
      reponse => {
        this.mesEvents=reponse.json();
        console.log(this.mesEvents);
    })
  }

  openDialog(id): void {
    const dialogConfig = new MatDialogConfig();

    console.log(id);
    this.myservice2.choixEvent(id);

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ZoomEventComponent, dialogConfig);
  }

  supprimer(event){
    this.http.delete('http://localhost:8080/event/'+event.id).subscribe(
      reponse => {
        this.confirmationSuppr = reponse.json();
        //console.log(this.confirmationSuppr);
      }
    )
  }

  modifier(event){
    const dialogConfig = new MatDialogConfig();

    console.log(event);
    this.myservice2.choixEvent(event.id);

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ModifEventComponent, dialogConfig);
  }
}
