import { Commande } from "./commande";
import { Produit } from "./produit";

export class RowCommande {


    commande:Commande;
    produit:Produit;
    quantite:Number;

    constructor(commande:Commande,produit:Produit,quantite:Number)
    {

        this.commande=commande;
        this.produit=produit;
        this.quantite=quantite;
    }

}
