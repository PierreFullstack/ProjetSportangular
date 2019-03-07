import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ZoomeventService } from '../zoomevent.service';
import { Evenement } from '../Evenement';
import { User } from '../User';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modif-event',
  templateUrl: './modif-event.component.html',
  styleUrls: ['./modif-event.component.css']
})
export class ModifEventComponent implements OnInit {

  id;
  event : Evenement = new Evenement;
  createur : User = new User;

  constructor(private router: Router,
    private http: Http,
    private myservice: ZoomeventService,
    public dialogRef : MatDialogRef<ModifEventComponent>) { }

  ngOnInit() {
    this.id = this.myservice.idEvent;
    this.http.get('http://localhost:8080/event/'+this.id).subscribe(
      reponse => {
        this.event=reponse.json();
        this.createur = this.event.createur;
    })
  }

  modifEvent(){
    this.http.put('http://localhost:8080/event/'+this.id,this.event).subscribe(
      reponse => {
        this.event=reponse.json();
        console.log(this.event);
        this.http.get('http://localhost:8080/event').subscribe(
          reponse => {
            this.event=reponse.json();
            this.router.navigate(['/afficheevent']);
            this.dialogRef.close();
        })
    })
  }

}
