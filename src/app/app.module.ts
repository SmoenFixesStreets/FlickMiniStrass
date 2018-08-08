import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DamageAssessmentComponent } from './damage-assessment/damage-assessment.component';
import { MapComponent } from './map/map.component';

import { MaterializeModule } from 'angular2-materialize';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DamageAssessmentComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    LeafletModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
