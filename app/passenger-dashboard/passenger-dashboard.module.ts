import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpModule } from '@angular/http';
import { FormsModule, } from '@angular/forms';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-component/passenger-dashboard.component'
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service'; 
import { PassengerForm } from './components/passenger-form/passenger-form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { 
        path: 'passengers', 
        children: [
            { path: '', component: PassengerDashboardComponent },
            { path: ':id', component: PassengerViewerComponent }
        ] 
    }
];

@NgModule({ 
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
                    PassengerDashboardComponent, 
                    PassengerCountComponent, 
                    PassengerDetailComponent, 
                    PassengerViewerComponent, 
                    PassengerForm
                    ]
})
export class PassengerDashboardModule{}