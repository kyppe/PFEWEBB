export class Administrateur {
    id:number;
    email: string;
    password: string;
  
    constructor(email: string, password: string,id:number) {
      this.email = email;
      this.password = password;
      this.id=id;
    }
}
