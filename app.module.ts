import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FiveHundredPricingComponent } from './five-hundred-pricing/five-hundred-pricing.component';
import { OneThousandPricingComponent } from './one-thousand-pricing/one-thousand-pricing.component';
import { TwoThousandPricingComponent } from './two-thousand-pricing/two-thousand-pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    ContactusComponent,
    FeaturesComponent,
    HomeComponent,
    PricingComponent,
    FiveHundredPricingComponent,
    OneThousandPricingComponent,
    TwoThousandPricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
