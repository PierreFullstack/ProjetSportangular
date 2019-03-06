import { Component, OnInit } from '@angular/core';
import { UsercoService } from '../userco.service';
import { Http } from '@angular/http';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ZoomeventService } from '../zoomevent.service';
import { ZoomEventComponent } from '../zoom-event/zoom-event.component';

@Component({
  selector: 'app-affiche-participation-event',
  templateUrl: './affiche-participation-event.component.html',
  styleUrls: ['./affiche-participation-event.component.css']
})
export class AfficheParticipationEventComponent implements OnInit {

  mesEvents;

  constructor(private http: Http,
    private myservice: UsercoService,
    public dialog: MatDialog,
    private myservice2: ZoomeventService) { }

  ngOnInit() {
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

}
