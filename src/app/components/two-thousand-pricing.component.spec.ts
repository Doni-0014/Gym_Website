import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoThousandPricingComponent } from './two-thousand-pricing.component';

describe('TwoThousandPricingComponent', () => {
  let component: TwoThousandPricingComponent;
  let fixture: ComponentFixture<TwoThousandPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoThousandPricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoThousandPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
