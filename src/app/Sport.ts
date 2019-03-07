export class Sport{
    public id: number;
    public affiche : boolean;
    public nom: string;
    public nbrMin: number;
    public nbrMax: number;

    constructor(id : number, affiche: boolean){
        this.id=id;
        this.affiche=affiche;
    }

}