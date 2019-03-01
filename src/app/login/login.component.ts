import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User =new User();

  constructor() { }

  ngOnInit() {
  }

  connect(){
    console.log('Tentative de connexion');


  }

}
