import { Produit } from "./produit";

export class Categorie {

    intituleCategorie:string;
    id:number;
    products:Produit[]

    constructor(id:number,intituleCategorie:string,products:Produit[])
    {
        this.id=id;
        this.intituleCategorie=intituleCategorie;
        this.products=products;
    }

}
