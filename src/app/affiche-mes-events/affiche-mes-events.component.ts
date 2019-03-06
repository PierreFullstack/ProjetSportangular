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

  constructor(
    private router: Router,
    private http: Http,
    private myservice: UsercoService,
    public dialog: MatDialog,
    private myservice2: ZoomeventService) { }

  ngOnInit() {
    this.myservice.show();    // affiche barre de menu
    if (this.myservice.user.id == null ){     // met martin par défaut si on actualise
      this.myservice.user.id = 3;
    }
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
    const dialogConfig = new MatDialogConfig();
    this.myservice2.choixEvent(event.id);
    this.myservice2.modeSupprOn();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ZoomEventComponent, dialogConfig);
  }

  modifier(event){
    const dialogConfig = new MatDialogConfig();

    console.log(event);
    this.myservice2.choixEvent(event.id);

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(ModifEventComponent, dialogConfig);
  }

  Gotousevenements(){
    this.router.navigate(['/afficheevent']);
  }

  GoMesevenements(){
    this.router.navigate(['/affichemesevents']);
  }

  GoMesparticipations(){
    this.router.navigate(['/affichemesparticipations']);
  }

}
