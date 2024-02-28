import { Client } from "./client";
import { RowCommande } from "./row-commande";

export class Commande {

    id:number;

    client:Client;

    rows:RowCommande[];

    constructor(client:Client,rows:RowCommande[],id:number)
    {
        this.client =client  ;
        this.rows=rows;
        this.id=id;
    }
}
