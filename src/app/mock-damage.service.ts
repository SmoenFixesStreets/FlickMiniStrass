import { Injectable } from '@angular/core';
import {Damage} from './damage';

@Injectable()
export class MockDamageService {

  private damages: Damage[] = [];

  constructor() { }

  addDamage(damage: Damage){
    this.damages.push(damage);
  }

  deleteDamage(damage: Damage){
    let dInd = this.damages.findIndex(el => {
      return el === damage;
    });

    this.damages.splice(dInd, 1);
  }

  getDamages(){
    return this.damages;
  }

}
