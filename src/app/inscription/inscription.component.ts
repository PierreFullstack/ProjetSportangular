import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsercoService } from './../userco.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user : User = new User();
  show=false;
  userrep;
  constructor(private router: Router, 
  private http: Http,
  private myservice: UsercoService) { }

  showMessage = false;

  ngOnInit() {
  }

inscrire(){
  console.log('Tentative inscritption');

  if(this.user.nom!=null && this.user.prenom!=null && this.user.mail!=null && this.user.mdp!=null)
{
  this.http.post('http://localhost:8080/user',this.user).subscribe(data=>{
      console.log(data);
      this.showMessage = true;
    }, err=>{
      console.log(err);
      
  });
}
else{this.show = true;}
}


}