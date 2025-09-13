import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration.component';
import { HeaderComponent } from './components/header.component';
import { ContactusComponent } from './components/contactus.component';
import { FeaturesComponent } from './components/features.component';
import { HomeComponent } from './components/home.component';
import { PricingComponent } from './components/pricing.component';
import { FiveHundredPricingComponent } from './components/five-hundred-pricing.component';
import { OneThousandPricingComponent } from './components/one-thousand-pricing.component';
import { TwoThousandPricingComponent } from './components/two-thousand-pricing.component';

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
