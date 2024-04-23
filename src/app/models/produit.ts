import { Categorie } from "./categorie";

export class Produit {
  id:number;
  name:string;
    barCode: string;
    ref: string;
    desc: string;
    codeFamille: string;
    price: number;
    stock:number;
    categorie:Categorie;
    tva:number;
  
    constructor(name:string,barCode: string, ref: string, desc: string, stock:number,codeFamille: string, price: number,id:number,categorie:Categorie,tva:number) {
      this.barCode = barCode;
      this.ref = ref;
      this.desc = desc;
      this.codeFamille = codeFamille;
      this.price = price;
      this.id=id;
      this.stock=stock;
      this.name=name;
      this.categorie=categorie;
      this.tva=tva;
    }
  
}
