import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesModule } from './country/countries.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
})
export class AppModule {}
