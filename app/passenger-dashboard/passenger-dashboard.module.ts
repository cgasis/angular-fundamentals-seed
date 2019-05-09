import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-component/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service'; 
import { PassengerForm } from './components/passenger-form/passenger-form.component';
@NgModule({ 
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent, PassengerViewerComponent, PassengerForm],
    exports: [PassengerViewerComponent]
})
export class PassengerDashboardModule{}