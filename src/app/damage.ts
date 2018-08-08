export class Damage {
  id: number;
  title: string;
  description: string;
  lat: number;
  long: number;

  constructor(object?: any){
    // this.id = object.id;
    this.title = object.title;
    this.description = object.description;
    this.lat = object.lat;
    this.long = object.long;
  }

  //constructor();
}
