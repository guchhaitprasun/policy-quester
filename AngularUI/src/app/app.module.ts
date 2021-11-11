import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoliciesComponent } from './components/policies/policies.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ChartsComponent } from './components/charts/charts.component';
import { ChartModule } from 'angular-highcharts'

@NgModule({
  declarations: [
    AppComponent,
    PoliciesComponent,
    CustomersComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule, 
    AppRoutingModule,
    BrowserAnimationsModule, 
    SharedModule, 
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
