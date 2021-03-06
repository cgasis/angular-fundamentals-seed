import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    templateUrl: 'passenger-detail.template.html'
})
export class PassengerDetailComponent implements OnChanges {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    @Output()
    view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    editing: boolean = false;
    
    constructor(){}

    ngOnChanges(changes) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }

    onChangeName(value: string) {
      // console.log(value);
      this.detail.fullname = value;
    }

    onChangeNameToggle() { 
      this.editing = !this.editing;
      if (!this.editing) this.edit.emit(this.detail);
    }
    
    onRemove() {
      this.remove.emit(this.detail);
    }

    goToPassenger() { 
      this.view.emit(this.detail);
    }
}