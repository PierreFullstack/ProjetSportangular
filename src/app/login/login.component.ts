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

  message;
  user: User =new User();
  show=false;
  userrep;
  constructor(private router: Router, 
  private http: Http,
  private myservice: UsercoService) { }

  ngOnInit() {
  }

  connect(){
    this.show=false;
    // console.log('Tentative de connexion');
    if(this.user.pseudo == null || this.user.mdp == null){
      this.message="Merci de remplir tous les champs !";
      this.show=true;}
      else {
        this.http.post('http://localhost:8080/userconnexion', this.user).subscribe(reponse =>{
        this.userrep=reponse.json();
        if (this.userrep.mdp != this.user.mdp && this.userrep.pseudo != this.user.pseudo){
          this.message="Pseudo ou mot de passe incorrect"
          this.show=true;
        }
        else{
          this.myservice.mettreuser(this.userrep);
          this.router.navigate(['/afficheevent']);
          // console.log(this.myservice.user);
        }
        });
    }

  }

  inscrireF(){
    this.router.navigate(['/inscription']);
  }

}
