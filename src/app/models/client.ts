export class Client {
    id:number;
    email: string;
    password: string;
    name: string;
    lastname: string;
    phone: string;
    cin:string;
  
    constructor(email: string, password: string, name: string, lastName: string, phone: string,id:number,cin:string) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.lastname = lastName;
      this.phone = phone;
      this.cin=cin;
      this.id=id
    }
  }
  