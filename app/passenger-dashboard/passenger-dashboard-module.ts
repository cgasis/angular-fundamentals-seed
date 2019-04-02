import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PassengerDashboardComponent } from './containers/passenger-component/passenger-dashboard.component'

import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';


@NgModule({ 
    imports: [
        CommonModule
    ],
    declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
    exports: [PassengerDashboardComponent]
})
export class PassengerDashboardModule{}