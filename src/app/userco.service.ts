import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UsercoService {

  user: User =new User();

  constructor() { }

  mettreuser (userco) {
    this.user=userco ;
  }


}
