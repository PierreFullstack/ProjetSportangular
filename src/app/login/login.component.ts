import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =new User();
  show=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  connect(){
    console.log('Tentative de connexion');
      
    if (this.user.pseudo=='pierre' && this.user.mdp=="banane"){
      this.router.navigate(['/afficheevent']);
    }
    else{
      this.show=true;
    }

  }

}
