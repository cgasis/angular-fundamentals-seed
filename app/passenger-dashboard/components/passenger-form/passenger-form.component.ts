import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger-dashboard.interface';

@Component({
    selector: 'passenger-form',
    styleUrls : ['passenger-form.component.scss'],
    templateUrl : 'passenger-form.component.html'
})
export class PassengerForm {
    @Input()
    detail: Passenger;
    constructor() {}
    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn)
            this.detail.checkedindate = +Date.now();
    }
}