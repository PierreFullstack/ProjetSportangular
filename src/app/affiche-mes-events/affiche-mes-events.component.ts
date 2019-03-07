import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsercoService } from '../userco.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ZoomeventService } from '../zoomevent.service';
import { ZoomEventComponent } from '../zoom-event/zoom-event.component';
import { ModifEventComponent } from '../modif-event/modif-event.component';
import { TrisportService } from './../trisport.service';

@Component({
  selector: 'app-affiche-mes-events',
  templateUrl: './affiche-mes-events.component.html',
  styleUrls: ['./affiche-mes-events.component.css']
})
export class AfficheMesEventsComponent implements OnInit {

  mesEvents;
  confirmationSuppr = false;
  idsport;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private router: Router,
    private http: Http,
    private myservice: UsercoService,
    public dialog: MatDialog,
    private tri: TrisportService,
    private myservice2: ZoomeventService) { }

  ngOnInit() {
    this.tri.showtennis();
    this.tri.showfoot();
    this.tri.showvolley();
    this.tri.showbasket();
    this.tri.showbadminton();
    this.tri.showcourse();

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

    this.myservice.show();    // affiche barre de menu
    if (this.myservice.user.id == null ){     // met martin par défaut si on actualise
      this.myservice.user.id = 1;
    }
    this.http.get('http://localhost:8080/meseventcree/'+this.myservice.user.id).subscribe(
      reponse => {
        this.mesEvents=reponse.json();
        //console.log(this.mesEvents);
    })
  }

  onItemSelect(item: any) {
    if (item.item_id==1){this.tri.showtennis()};
    if (item.item_id==2){this.tri.showfoot()};
    if (item.item_id==3){this.tri.showvolley()};
    if (item.item_id==4){this.tri.showbasket()};
    if (item.item_id==5){this.tri.showbadminton()};
    if (item.item_id==6){this.tri.showcourse()};
  }

  onSelectAll() {
    this.tri.showtennis();
    this.tri.showfoot();
    this.tri.showvolley();
    this.tri.showbasket();
    this.tri.showbadminton();
    this.tri.showcourse();
  }

  onItemDeSelect(item: any) {
    if (item.item_id==1){this.tri.hidetennis()};
    if (item.item_id==2){this.tri.hidefoot()};
    if (item.item_id==3){this.tri.hidevolley()};
    if (item.item_id==4){this.tri.hidebasket()};
    if (item.item_id==5){this.tri.hidebadminton()};
    if (item.item_id==6){this.tri.hidecourse()};
  }
  
  onDeSelectAll() {
    this.tri.hidetennis();
    this.tri.hidefoot();
    this.tri.hidevolley();
    this.tri.hidebasket();
    this.tri.hidebadminton();
    this.tri.hidecourse();
  }

  checksport(id : number){
    this.idsport=id;
    if (this.tri.tennis.id == this.idsport && this.tri.tennis.affiche==false){
      return false;
    }
    else if (this.tri.foot.id == this.idsport && this.tri.foot.affiche==false){
      return false;
    }
    else if (this.tri.volley.id == this.idsport && this.tri.volley.affiche==false){
      return false;
    }
    else if (this.tri.basket.id == this.idsport && this.tri.basket.affiche==false){
      return false;
    }
    else if (this.tri.badminton.id == this.idsport && this.tri.badminton.affiche==false){
      return false;
    }
    else if (this.tri.course.id == this.idsport && this.tri.course.affiche==false){
      return false;
    }
    else {
      return true;
    }
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

  GoArchives(){
    this.router.navigate(['/archives']);
  }

}
