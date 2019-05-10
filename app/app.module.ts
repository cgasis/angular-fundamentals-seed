import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { PassengerDashboardService } from './passenger-dashboard/passenger-dashboard.service';

import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app.home.component'
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: '', component: AppHomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, AppHomeComponent, NotFoundComponent],
  providers: [PassengerDashboardService]
})
export class AppModule {   }
