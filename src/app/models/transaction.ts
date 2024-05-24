import { Client } from "./client";

export class Transaction {

    
    id:string;
    credit:number;
    echance:Date;
    typeTra:number;
    libelle:String;
    client:Client;

    constructor(id: string, credit: number, echance: Date, typeTra: number, libelle: String, client: Client) {
        this.id = id;
        this.credit = credit;
        this.echance = echance;
        this.typeTra = typeTra;
        this.libelle = libelle;
        this.client = client;
    }

}
