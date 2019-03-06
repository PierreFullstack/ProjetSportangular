import { User } from "./User";
import { Evenement } from "./Evenement";


export class Participation{

    public id : number;
    constructor(
        public event: Evenement,
        public participant: User,
    ){}
}