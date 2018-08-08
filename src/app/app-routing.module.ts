import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DamageAssessmentComponent} from './damage-assessment/damage-assessment.component';

const routes: Routes = [
  {
    path: 'damageassessment',
    component: DamageAssessmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
