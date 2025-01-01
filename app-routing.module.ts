import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FiveHundredPricingComponent } from './five-hundred-pricing/five-hundred-pricing.component';
import { OneThousandPricingComponent } from './one-thousand-pricing/one-thousand-pricing.component';
import { TwoThousandPricingComponent } from './two-thousand-pricing/two-thousand-pricing.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path:  'contactus', component: ContactusComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'pricing' , component: PricingComponent},
  { path: 'fiveHundredPricing' , component: FiveHundredPricingComponent},
  { path: 'oneThousandPricing' , component: OneThousandPricingComponent},
  { path: 'twoThousandPricing' , component: TwoThousandPricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
