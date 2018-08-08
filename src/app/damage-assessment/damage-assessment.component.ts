import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Damage} from '../damage';
import {MockDamageService} from '../mock-damage.service';

@Component({
  selector: 'app-damage-assessment',
  templateUrl: './damage-assessment.component.html',
  styleUrls: ['./damage-assessment.component.css']
})
export class DamageAssessmentComponent implements OnInit {

  damageForm: FormGroup = new FormGroup({});

  constructor(private mockDamageService: MockDamageService) { }

  ngOnInit() {
    this.damageForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      long: new FormControl('', [Validators.required])
    });
  }

  handleMapClick(latlng){
    this.damageForm.patchValue({
      lat: (Math.round(latlng.lat * 1000) / 1000),
      long: (Math.round(latlng.lng * 1000) / 1000),
    });
  }

  submitDamage(){
    let damage = new Damage(this.damageForm.value);
    this.mockDamageService.addDamage(damage);

  }

}
