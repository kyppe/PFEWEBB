import { Commande } from "./commande";
import { Produit } from "./produit";

export class RowCommande {

    id:number;
    commande:Commande;
    product:Produit;
    qte:number;
    price:number

    constructor(commande:Commande,product:Produit,qte:number,id:number)
    {

        this.commande=commande;
        this.product=product;
        this.qte=qte;
        this.id=id;
    }

}
