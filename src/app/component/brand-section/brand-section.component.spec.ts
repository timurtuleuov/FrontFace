import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSectionComponent } from './brand-section.component';

describe('BrandSectionComponent', () => {
  let component: BrandSectionComponent;
  let fixture: ComponentFixture<BrandSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandSectionComponent]
    });
    fixture = TestBed.createComponent(BrandSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
