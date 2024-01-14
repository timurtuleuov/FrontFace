import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialSectionComponent } from './free-trial-section.component';

describe('FreeTrialSectionComponent', () => {
  let component: FreeTrialSectionComponent;
  let fixture: ComponentFixture<FreeTrialSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeTrialSectionComponent]
    });
    fixture = TestBed.createComponent(FreeTrialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
