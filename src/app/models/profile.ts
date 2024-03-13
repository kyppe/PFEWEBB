import { Client } from "./client";

export class Profile {

    intituleProfile:string;
    id:number;
    clients:Client[];

    constructor(id:number,intituleProfile:string,clients:Client[])
    {
        this.id=id;
        this.intituleProfile=intituleProfile;
        this.clients=clients;
    }


}
