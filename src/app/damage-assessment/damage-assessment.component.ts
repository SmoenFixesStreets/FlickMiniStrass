import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Damage} from '../damage';
import {MockDamageService} from '../mock-damage.service';
import {Router} from '@angular/router';
import {MapitService} from '../mapit.service';

@Component({
  selector: 'app-damage-assessment',
  templateUrl: './damage-assessment.component.html',
  styleUrls: ['./damage-assessment.component.css']
})
export class DamageAssessmentComponent implements OnInit {

  damageForm: FormGroup = new FormGroup({});
  noClick: boolean = true;
  clickedAllowedArea: boolean = false;

  constructor(private mockDamageService: MockDamageService, private router: Router, private mapitService: MapitService) {
  }

  ngOnInit() {
    this.damageForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      long: new FormControl('', [Validators.required])
    });
  }

  handleMapClick(latlng) {
    this.noClick = false;
    this.mapitService.getAreasFor(latlng.lat, latlng.lng).subscribe((data: any) => {
      console.log(data);
      let allowed_ids = this.mapitService.getAllowedIds();
      let found: boolean = false;
      Object.keys(data).forEach(el => {
        console.log(el);
        if (allowed_ids.findIndex(id => {
          console.log(id);
            return id.toString() == el;
          }) > -1){
          found = true;
        }
      })
      this.clickedAllowedArea = found;
      ;

      this.damageForm.patchValue({
        lat: (Math.round(latlng.lat * 1000) / 1000),
        long: (Math.round(latlng.lng * 1000) / 1000),
      });
    });


  }

  submitDamage() {
    let damage = new Damage(this.damageForm.value);
    this.mockDamageService.addDamage(damage);
    this.router.navigate(['../damages']);

  }

}
