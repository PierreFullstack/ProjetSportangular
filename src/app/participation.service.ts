import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  idParticipation : number;

  constructor() { }

  choixparticipation(id){
    this.idParticipation = id;
  }
}
