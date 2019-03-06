import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomeventService {

  idEvent;
  modeSuppr = false;

  constructor() { }

  choixEvent(idEvent){
    this.idEvent = idEvent;
  }
  
  modeSupprOn(){
    this.modeSuppr = true;
  }

  modeSupprOff(){
    this.modeSuppr = false;
  }
}
