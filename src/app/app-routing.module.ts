import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { RegistrationComponent } from './components/registration.component';
import { ContactusComponent } from './components/contactus.component';
import { FeaturesComponent } from './components/features.component';
import { HomeComponent } from './components/home.component';
import { PricingComponent } from './components/pricing.component';
import { FiveHundredPricingComponent } from './components/five-hundred-pricing.component';
import { OneThousandPricingComponent } from './components/one-thousand-pricing.component';
import { TwoThousandPricingComponent } from './components/two-thousand-pricing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
