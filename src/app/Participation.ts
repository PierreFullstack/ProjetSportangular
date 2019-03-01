import { User } from "./User";
import { Evenement } from "./Evenement";


export class Participation{
    constructor(
        public event: Evenement,
        public participant: User,
    ){}
}