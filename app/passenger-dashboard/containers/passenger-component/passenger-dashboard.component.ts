import { Component, OnInit } from '@angular/core';
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
  
  constructor() {}

  ngOnInit() {
    this.passengers = [
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
  
  handleEdit(event: Passenger) {
    // console.log('edit: ', event);r
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if(passenger.id === event.id) { 
        passenger = Object.assign({}, passenger, event);
        console.log(event.name);
      }
      
      return passenger;
    });
    // console.log(this.passengers);
  }

  handleRemove(event: Passenger) {
    // console.log('remove: ', event);
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  } 
}