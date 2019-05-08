import { Component, OnInit } from '@angular/core';

import { PassengerDashboardService } from './../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger-dashboard.interface';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.component.template.html'
})
export class PassengerViewerComponent implements OnInit {
    passenger: Passenger;
    constructor(private passengerService: PassengerDashboardService) {}
    ngOnInit() {
        this.passengerService
            .getPassenger(2)
            .subscribe((data: Passenger) => this.passenger = data);
    }
}