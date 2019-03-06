import { Component, OnInit } from '@angular/core';
import { UsercoService } from '../userco.service';
import { Http } from '@angular/http';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ZoomeventService } from '../zoomevent.service';
import { ZoomEventComponent } from '../zoom-event/zoom-event.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-affiche-participation-event',
  templateUrl: './affiche-participation-event.component.html',
  styleUrls: ['./affiche-participation-event.component.css']
})
export class AfficheParticipationEventComponent implements OnInit {

  mesEvents;

  constructor(private http: Http,
    private router: Router,
    private myservice: UsercoService,
    public dialog: MatDialog,
    private myservice2: ZoomeventService) { }

  ngOnInit() {
    this.myservice.show();    // affiche barre de menu
    if (this.myservice.user.id == null ){     // met martin par défaut si on actualise
      this.myservice.user.id = 1;
    }
    this.http.get('http://localhost:8080/mesparticipations/'+this.myservice.user.id).subscribe(
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

  departiciper(event){
    const dialogConfig = new MatDialogConfig();
    this.myservice2.choixEvent(event.id);
    this.myservice2.modeDeparticiperOn();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ZoomEventComponent, dialogConfig);
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
