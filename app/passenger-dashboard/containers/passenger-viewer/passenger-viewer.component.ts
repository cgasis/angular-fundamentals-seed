import { Component, OnInit, Input } from '@angular/core';

import { PassengerDashboardService } from './../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'passenger-viewer',
    styleUrls: ['passenger-viewer.component.scss'],
    templateUrl: 'passenger-viewer.component.html'
})
export class PassengerViewerComponent implements OnInit { 
    passenger: Passenger;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private passengerService: PassengerDashboardService) {}
    ngOnInit() {
        this.route.params
        .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
        .subscribe((data: Passenger) => this.passenger = data);
        // this.passengerService
        //     .getPassenger(1)
        //     .subscribe((data: Passenger) => this.passenger = data);
    }
    goBack() {
        this.router.navigate(['/passengers']);
    }
}