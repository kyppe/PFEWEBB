export class Client {
    id:number;
    email: string;
    password: string;
    name: string;
    lastName: string;
    phone: string;
  
    constructor(email: string, password: string, name: string, lastName: string, phone: string,id:number) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.lastName = lastName;
      this.phone = phone;
      this.id=id
    }
  }
  