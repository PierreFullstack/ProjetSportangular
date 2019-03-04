import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsercoService {

  user;

  constructor() { }

  mettreuser (userco) {
    this.user=userco ;
  }

}
