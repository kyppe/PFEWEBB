export class Adresse {
  lat: number;
  long: number;
  city: string;
  address: string;

  constructor(lat: number, long: number, city: string, address: string) {
    this.lat = lat;
    this.long = long;
    this.city = city;
    this.address = address;
  }
}
