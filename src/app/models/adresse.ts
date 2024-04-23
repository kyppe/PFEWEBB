export class Adresse {
  id: number;
  lat: number;
  long: number;
  address: string;

  constructor(lat: number, long: number, address: string, id: number) {
    this.lat = lat;
    this.long = long;
    this.address = address;
    this.id = id;

  }
}
