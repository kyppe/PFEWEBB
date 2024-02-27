import { Client } from "./client";
import { RowCommande } from "./row-commande";

export class Commande {

    client:Client;

    rows:RowCommande[];

    constructor(client:Client,rows:RowCommande[])
    {
        this.client =client  ;
        this.rows=rows;
    }
}
