export class Adresse {
  id:number;
  lat: number;
  long: number;
  city: string;
  address: string;

  constructor(lat: number, long: number, city: string, address: string,id:number) {
    this.lat = lat;
    this.long = long;
    this.city = city;
    this.address = address;
    this.id=id;

  }
}
