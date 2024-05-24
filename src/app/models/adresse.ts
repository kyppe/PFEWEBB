export class Adresse {
  id: string;
  lat: number;
  long: number;
  address: string;

  constructor(lat: number, long: number, address: string, id: string) {
    this.lat = lat;
    this.long = long;
    this.address = address;
    this.id = id;

  }
}
