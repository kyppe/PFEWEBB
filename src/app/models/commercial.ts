export class Commercial {
  id:number;
    email: string;
    password: string;
    name: string;
    lastname: string;
    phone: string;
    cin:string;

  
    constructor(email: string, cin:string,password: string, name: string, lastname: string, phone: string,id:number) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.lastname = lastname;
      this.phone = phone;
      this.cin=cin;
      this.id=id;

    }
}
