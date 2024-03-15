import { Categorie } from "./categorie";
import { Profile } from "./profile";

export class MatchProfileCategorie {
   
   
   
    remise:number;
    id:number;
    categorie:Categorie;
    profile:Profile

    constructor(id:number,remise:number,categorie:Categorie,profile:Profile)
    {
        this.id=id;
        this.remise=remise;
        this.categorie=categorie;
        this.profile=profile;

    }


}
