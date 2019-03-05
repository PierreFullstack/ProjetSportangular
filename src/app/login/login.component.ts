import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { UsercoService } from './../userco.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =new User();
  show=false;
  userrep;
  constructor(private router: Router, 
  private http: Http,
  private myservice: UsercoService) { }

  ngOnInit() {
  }

  connect(){
    console.log('Tentative de connexion');

    this.http.post('http://localhost:8080/userconnexion', this.user).subscribe(reponse =>{
      this.userrep=reponse.json();
      if (this.userrep.mdp != this.user.mdp ){
        this.show=true;
      }
      else{
        this.myservice.mettreuser(this.userrep);
        this.router.navigate(['/afficheevent']);
        console.log(this.myservice.user);
      }
    });
    

  }

  inscrireF(){
    this.router.navigate(['/inscription']);
  }

}
