import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsercoService {

  user = new User;
  shownavbar : boolean;

  constructor() {this.shownavbar=false; }

  mettreuser (userco) {
    this.user=userco ;
  }

  show() { this.shownavbar = true; }
  hide() { this.shownavbar = false; }


}
