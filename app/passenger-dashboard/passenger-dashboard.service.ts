import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Passenger } from './models/passenger-dashboard.interface';


@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) { 
        console.log(http);
    }

    getPassengers(): Passenger[] {
        return [
            {
                id: 1,
                name: 'Kennedy',
                checkedindate: 1552924800000,
                checkin: true,
                children: [{
                    name: 'Rose',
                    age: 21
                },
                {
                    name: 'Michael',
                    age: 33
                }]
            },
            {
                id: 2,
                name: 'Trump',
                checkedindate: 1288323623006,
                checkin: true,
                children: null
            },
            {
                id: 3,
                name: 'Washington',
                checkedindate: null,
                checkin: false,
                children: [{
                    name: 'Fely',
                    age: 21
                }]
            }
        ]
    }
}