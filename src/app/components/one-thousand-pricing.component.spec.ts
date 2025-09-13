import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneThousandPricingComponent } from './one-thousand-pricing.component';

describe('OneThousandPricingComponent', () => {
  let component: OneThousandPricingComponent;
  let fixture: ComponentFixture<OneThousandPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneThousandPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneThousandPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
