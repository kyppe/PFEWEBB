import { Commande } from "./commande";
import { Transaction } from "./transaction";

export class Client {
  id:number;
  email: string;
  password: string;
  name: string;
  phone: string;
  actif:boolean;
  mf:string;
  commande:Commande[];
  transactions:Transaction[];

  constructor(email: string, password: string, name: string,  phone: string,id:number,mf:string,actif:boolean,commande:Commande[],transactions:Transaction[]) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.mf=mf;
    this.actif=actif;
    this.id=id;
    this.commande=commande;
    this.transactions=transactions;
  }



}
  