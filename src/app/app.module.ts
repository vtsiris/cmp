import { MaterialModule } from './services/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './theme/navbar/navbar.component';
import { EuropeRegionComponent } from './theme/europe-region/europe-region.component';
import { CountryDetailsComponent } from './theme/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EuropeRegionComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
