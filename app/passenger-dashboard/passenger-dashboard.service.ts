import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Passenger } from './models/passenger-dashboard.interface';
import { httpFactory } from '@angular/http/src/http_module';

const PASSENGER_API: string = '/api/passengers';


@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) { }

    getPassengers(): Promise<Passenger[]> {
        return this.http
            .get(PASSENGER_API)
            .toPromise()
            .then((response: Response) => {
                return response.json();
            })
    } 

    updatePassengers(passenger: Passenger): Promise<Passenger> {
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        });
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .toPromise()
            .then((response: Response) => response.json());
    }

    editPassengers(passenger: Passenger): Promise<Passenger> {
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger)
            .toPromise()
            .then((response: Response) => response.json());
    }

    removePassengers(passenger: Passenger): Promise<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`)
            .toPromise()
            .then((response: Response) => response.json());
    }
}