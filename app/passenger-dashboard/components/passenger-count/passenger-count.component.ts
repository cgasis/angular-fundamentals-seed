import { Component,Input } from '@angular/core';
import { Passenger } from '../../models/passenger-dashboard.interface'

@Component({
    selector: 'passenger-count',
    styleUrls: ['./passenger-count.component.scss'],
    template: ` 
        <div class="count">
            <h1>Airline Passengers</h1>
            <div>
                Total Checked in: {{ CheckedInCheckOut() }} / {{ items?.length }}
            </div>
        </div>
        <div>&nbsp;</div>
    `
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