import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveHundredPricingComponent } from './five-hundred-pricing.component';

describe('FiveHundredPricingComponent', () => {
  let component: FiveHundredPricingComponent;
  let fixture: ComponentFixture<FiveHundredPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiveHundredPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiveHundredPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
