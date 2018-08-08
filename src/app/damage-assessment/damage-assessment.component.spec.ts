import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamageAssessmentComponent } from './damage-assessment.component';

describe('DamageAssessmentComponent', () => {
  let component: DamageAssessmentComponent;
  let fixture: ComponentFixture<DamageAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamageAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamageAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
