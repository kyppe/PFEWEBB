export class Produit {
  id:number;
  name:string;
    barCode: string;
    ref: string;
    desc: string;
    codeFamille: string;
    price: number;
    qte:number;
  
    constructor(name:string,barCode: string, ref: string, desc: string, qte:number,codeFamille: string, price: number,id:number) {
      this.barCode = barCode;
      this.ref = ref;
      this.desc = desc;
      this.codeFamille = codeFamille;
      this.price = price;
      this.id=id;
      this.qte=qte;
      this.name=name;
    }
  
}
