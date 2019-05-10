import { Component,Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-count',
    styleUrls: ['./passenger-count.component.scss'],
    templateUrl: 'passenger-count.template.html'
})
export class PassengerCountComponent { 
    @Input()
    items: Passenger[];
    constructor() {}
    CheckedInCheckOut() : number {
        if(!this.items) return;
        return this.items.filter((passenger: Passenger) => passenger.checkin).length;
    }
}