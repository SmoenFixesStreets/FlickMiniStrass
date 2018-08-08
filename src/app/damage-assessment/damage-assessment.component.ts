import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-damage-assessment',
  templateUrl: './damage-assessment.component.html',
  styleUrls: ['./damage-assessment.component.css']
})
export class DamageAssessmentComponent implements OnInit {

  damageForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() {
    this.damageForm = new FormGroup({
      title: new FormControl('', []),
      description: new FormControl('', []),
      lat: new FormControl('', []),
      long: new FormControl('', [])
    });
  }

  handleMapClick(latlng){
    this.damageForm.patchValue({
      lat: (Math.round(latlng.lat * 1000) / 1000),
      long: (Math.round(latlng.lng * 1000) / 1000),
    });
  }

}
