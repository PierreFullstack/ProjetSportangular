import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomeventService {

  idEvent;
  modeSuppr = false;
  modeDeparticiper = false;

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

  modeDeparticiperOn(){
    this.modeDeparticiper = true;
  }

  modeDeparticiperOff(){
    this.modeDeparticiper = false;
  }
}
