import { Client } from "./client";
import { RowCommande } from "./row-commande";

export class Commande {

    id:number;

    client:Client;

    rows:RowCommande[];
    etat:string
    total:number;

    constructor(client:Client,rows:RowCommande[],id:number,total:number,)
    {
        this.client =client  ;
        this.rows=rows;
        this.id=id;
        this.total=total;
    }
}
