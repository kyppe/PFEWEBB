export class TypeTransaction {
    id:number;
    type: string;
    value: string;
  
    constructor(type: string, value: string,id:number) {
      this.type = type;
      this.value = value;
      this.id=id;
    }
}
