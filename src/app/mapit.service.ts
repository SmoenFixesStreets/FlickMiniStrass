import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MapitService {

  private api = 'http://global.mapit.mysociety.org/point/4326/';

  private allowedIds = [1009442];

  constructor(private httpClient: HttpClient) { }

  getAreasFor(lat: number, lng: number){
    console.log(this.api + lng + ',' + lat);
    return this.httpClient.get(this.api + lng + ',' + lat);
  }

  getAllowedIds(){
    return this.allowedIds;
  }
}
