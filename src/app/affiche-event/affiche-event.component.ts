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
  mesEvent;
  event : Evenement = new Evenement(); // récupérer l'événement sur lequel on souhaite s'inscrire
  eventbis : Evenement = new Evenement(); // On récupère l'event après insertion de la participation dans la BD
  participation;
  listeParticipants;
  location;
  monurl = 'http://localhost:8080/event/';
  eventAffiche = false;
  item;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  mail;
  participants;

  constructor(private router: Router, 
    private http: Http,
    private myservice: UsercoService,
    public dialog: MatDialog,
    private myservice2: ZoomeventService) { }
    

  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'Tennis' },
      { item_id: 2, item_text: 'Football' },
      { item_id: 3, item_text: 'Volley' },
      { item_id: 4, item_text: 'Basketball' },
      { item_id: 5, item_text: 'Badminton' },
      { item_id: 6, item_text: 'Course à pied' }
    ];
    this.selectedItems = [
      { item_id: 1, item_text: 'Tennis' },
      { item_id: 2, item_text: 'Football' },
      { item_id: 3, item_text: 'Volley' },
      { item_id: 4, item_text: 'Basketball' },
      { item_id: 5, item_text: 'Badminton' },
      { item_id: 6, item_text: 'Course à pied' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: false
    }

    this.myservice.show();
    this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
    })

    if (this.myservice.user.id == null ){   // met martin par défaut si on actualise
      this.myservice.user.id = 1;
    }
    this.http.get('http://localhost:8080/mesparticipations/'+this.myservice.user.id).subscribe(
      reponse => {
        this.mesEvent=reponse.json();
        //console.log(this.mesEvent);
      }
    )
  }

  onItemSelect(item: any) {
    console.log("je coche cet item");
    console.log(item.item_id);
    console.log(item.item_text);
  }

  onDeItemSelect(item: any) {
    console.log(item);
  }

  onDropdownClose(items: any) {
    console.log(items);
  }

  participer(eve){
    this.event = eve;
    this.participation = new Participation(this.event, this.myservice.user);
    // console.log(this.participation);
    this.http.post('http://localhost:8080/participation',this.participation).subscribe(data=>{
    //  console.log(data);
    }, err=>{
      console.log(err);
  })

  this.http.get('http://localhost:8080/event').subscribe(
      reponse => {
        this.tousEvents=reponse.json();
        
  this.http.get(this.monurl+this.event.id).subscribe(reponse => {
      this.eventbis=reponse.json();     // on récupère les infos de l'event après MAJ de la participation
      if (this.eventbis.nbrParticipants==(this.eventbis.nbrmax-1)){
        console.log("event à fermer");
        console.log(this.eventbis);

        this.http.post('http://localhost:8080/mailconfirmationcreateur',this.eventbis).subscribe(
          reponse => {
            this.mail = reponse.json();
          })

          this.http.get('http://localhost:8080/listeparticipantsevent/'+this.eventbis.id).subscribe(
            reponse => {
              this.participants=reponse.json();

              this.http.post('http://localhost:8080/mailconfirmationparticipants',this.participants)
          })
      }
    })
      
  });


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
  
  checkAfficheEvent(id1, id2){
    if(id1==id2){
      this.eventAffiche = true;

      return true;
    }else{
      return false;
    }
  }

  checkAfficheEventElse(){
    if(this.eventAffiche){
      return false;
    }else{
      return true;
    }
  }

  checkReset(){
    this.eventAffiche = false;
    return true;
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