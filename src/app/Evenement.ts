import { Sport } from "./Sport";
import { User } from "./User";


export class Evenement{
    public id : number;
    public titre: string;
    public description: string;
    public dateEvent: Date;
    public horaire: string;
    public nbrParticipants: number;
    public sport: Sport;
    public createur: User;
    public nbrmax : number;

    constructor(){
    }
}