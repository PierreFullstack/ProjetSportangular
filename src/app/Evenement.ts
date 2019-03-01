import { Sport } from "./Sport";
import { User } from "./User";


export class Evenement{
    public nom: string;
    public description: string;
    public dateEvent: string;
    public horaire: string;
    public sport: Sport;
    public createur: User;
}