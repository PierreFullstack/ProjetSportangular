import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


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
  private http: Http) { }

  ngOnInit() {
  }

  connect(){
    console.log('Tentative de connexion');

    this.http.post('http://localhost:8080/userconnexion', this.user).subscribe(reponse =>{
      this.userrep=reponse.json();
      console.log(this.userrep);
      console.log(this.user);
      if (this.userrep.mdp != this.user.mdp ){
        this.show=true;
      }
      else{
        this.router.navigate(['/afficheevent']);
      }
    });
    

  }

}
