import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomeventService {

  idEvent;

  constructor() { }

  choixEvent(idEvent){
    this.idEvent = idEvent;
  }
  
}
