import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerDashboardService } from './passenger-dashboard/passenger-dashboard.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  providers: [PassengerDashboardService]
})
export class AppModule { }
