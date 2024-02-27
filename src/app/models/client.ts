import { Commande } from "./commande";

export class Client {
  id:number;
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
  actif:boolean;
  cin:string;
  commande:Commande[];

  constructor(email: string, password: string, name: string, lastName: string, phone: string,id:number,cin:string,actif:boolean,commande:Commande[]) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastname = lastName;
    this.phone = phone;
    this.cin=cin;
    this.actif=actif;
    this.id=id;
    this.commande=commande;
  }
}
  