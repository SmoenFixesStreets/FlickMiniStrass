import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DamageAssessmentComponent} from './damage-assessment/damage-assessment.component';
import {DamagesComponent} from './damages/damages.component';

const routes: Routes = [
  {
    path: 'damageassessment',
    component: DamageAssessmentComponent
  },
  {
    path: 'damages',
    component: DamagesComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
