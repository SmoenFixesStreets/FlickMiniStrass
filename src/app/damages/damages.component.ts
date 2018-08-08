import { Component, OnInit } from '@angular/core';
import {Damage} from '../damage';
import {MockDamageService} from '../mock-damage.service';

@Component({
  selector: 'app-damages',
  templateUrl: './damages.component.html',
  styleUrls: ['./damages.component.css']
})
export class DamagesComponent implements OnInit {

  damage: Damage;

  constructor(private mockDamageService: MockDamageService) { }

  ngOnInit() {
  }

  getDamages(){
    return this.mockDamageService.getDamages();
  }

}
