import { Commande } from "./commande";
import { Profile } from "./profile";
import { Transaction } from "./transaction";

export class Client {
  id:string;
  email: string;
  password: string;
  name: string;
  phone: string;
  actif:boolean;
  mf:string;
  commande:Commande[];
  transactions:Transaction[];
  profile:Profile;

  constructor(email: string, password: string, name: string,  phone: string,id:string,mf:string,actif:boolean,commande:Commande[],transactions:Transaction[],profile:Profile) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
    this.mf=mf;
    this.actif=actif;
    this.id=id;
    this.commande=commande;
    this.transactions=transactions;
    this.profile=profile;
  }



}
  