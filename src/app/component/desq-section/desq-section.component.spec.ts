import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesqSectionComponent } from './desq-section.component';

describe('DesqSectionComponent', () => {
  let component: DesqSectionComponent;
  let fixture: ComponentFixture<DesqSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesqSectionComponent]
    });
    fixture = TestBed.createComponent(DesqSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
