import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Passenger } from './models/passenger-dashboard.interface';
import { httpFactory } from '@angular/http/src/http_module';

const PASSENGER_API: string = '/api/passengers';


@Injectable()
export class PassengerDashboardService {
    constructor(private http: Http) { }

    getPassengers(): Observable<Passenger[]> {
        return this.http
            .get(PASSENGER_API) 
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    } 

    updatePassengers(passenger: Passenger): Observable<Passenger> {
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        });
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
            
    }

    editPassengers(passenger: Passenger): Observable<Passenger> {
        return this.http
            .put(`${PASSENGER_API}/${passenger.id}`, passenger) 
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    removePassengers(passenger: Passenger): Observable<Passenger> {
        return this.http
            .delete(`${PASSENGER_API}/${passenger.id}`) 
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}