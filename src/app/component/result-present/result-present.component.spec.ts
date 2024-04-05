import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPresentComponent } from './result-present.component';

describe('ResultPresentComponent', () => {
  let component: ResultPresentComponent;
  let fixture: ComponentFixture<ResultPresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPresentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultPresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
