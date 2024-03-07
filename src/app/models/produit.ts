export class Produit {
  id:number;
  name:string;
    barCode: string;
    ref: string;
    desc: string;
    codeFamille: string;
    price: number;
    stock:number;
  
    constructor(name:string,barCode: string, ref: string, desc: string, stock:number,codeFamille: string, price: number,id:number) {
      this.barCode = barCode;
      this.ref = ref;
      this.desc = desc;
      this.codeFamille = codeFamille;
      this.price = price;
      this.id=id;
      this.stock=stock;
      this.name=name;
    }
  
}
