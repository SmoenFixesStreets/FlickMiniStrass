import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DamageAssessmentComponent } from './damage-assessment/damage-assessment.component';
import { MapComponent } from './map/map.component';

import { MaterializeModule } from 'angular2-materialize';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {ReactiveFormsModule} from '@angular/forms';
import {MockDamageService} from './mock-damage.service';
import {MapitService} from './mapit.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { DamagesComponent } from './damages/damages.component';


@NgModule({
  declarations: [
    AppComponent,
    DamageAssessmentComponent,
    MapComponent,
    DamagesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    LeafletModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [MockDamageService, MapitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
