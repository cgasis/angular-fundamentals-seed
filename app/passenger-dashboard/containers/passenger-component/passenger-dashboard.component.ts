import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger-dashboard.interface'


@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `  
      <passenger-count [items]="passengers"></passenger-count> 
      <div>Names: </div>
      <ul *ngFor="let passenger of passengers;">
        <li>
          {{ passenger.name }}
        </li>
      </ul>
      <passenger-detail  
            *ngFor="let passenger of passengers;"
            [detail]="passenger"
            (edit)="handleEdit($event)"
            (remove)="handleRemove($event)"
            >
      </passenger-detail>  
    `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.passengerService
      .getPassengers()
      .then((data: Passenger[]) => this.passengers = data);
  }

  handleEdit(event: Passenger) {
    // console.log('edit: ', event);r
    this.passengerService
      .updatePassengers(event)
      .then((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleRemove(event: Passenger) {
    this.passengerService
        .removePassengers(event)
        .then((data: Passenger) => { 
            this.passengers = this.passengers.filter((passenger: Passenger) => {
              return passenger.id !== event.id;
            })

        }); 
    ;
  }
}