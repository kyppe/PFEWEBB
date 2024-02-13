export class Produit {
  id:number;
    barCode: string;
    ref: string;
    desc: string;
    codeFamille: string;
    price: number;
  
    constructor(barCode: string, ref: string, desc: string, codeFamille: string, price: number,id:number) {
      this.barCode = barCode;
      this.ref = ref;
      this.desc = desc;
      this.codeFamille = codeFamille;
      this.price = price;
      this.id=id;
    }
  
}
