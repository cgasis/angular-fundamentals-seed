import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/passenger.baggage';

@Component({
    selector: 'passenger-form',
    styleUrls : ['passenger-form.component.scss'],
    templateUrl : 'passenger-form.component.html'
})
export class PassengerForm {
    @Input()
    detail: Passenger;
    
    baggage: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    },{
        key: 'hand-only',
        value: 'Hand Baggage'
    },{
        key: 'hold-only',
        value: 'Hold baggage'
    },{
        key: 'hand-hold',
        value: 'Hand and Hold baggage'
    }];

    constructor() {}
    toggleCheckIn(checkedIn: boolean) {
        if(checkedIn)
            this.detail.checkedindate = +Date.now();
    }
}