import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Passenger } from '../../models/passenger-dashboard.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: ` 
        <div class="detail"> 
            <span
              class="status"
              [class.checked-in]="detail.checkin">
            </span>
              <div *ngIf="editing">
                  <input type="text" 
                      [value]="detail.name"
                      (input)=onChangeName(name.value)
                      #name
                  />
              </div>
              <div *ngIf="! editing">{{detail.name}} </div>
              <div>Checkedin: <span [class.error]="!detail.checkedindate">{{ detail.checkedindate? (detail.checkedindate | date: 'EEEE, MMMM d, y') : 'No Checked In' }}</span></div>
              <div *ngIf="detail.children"> 
              Children: 
                <ul *ngFor="let child of detail.children">
                  <li>
                    {{ child.name }}
                  </li>
                </ul>
              </div>
              <button (click)="onChangeNameToggle()">
                  {{ !this.editing ? 'Edit' : 'Done' }}
              </button>
              <button (click)="onRemove()">
                Remove
              </button>
        </div>
    `
})
export class PassengerDetailComponent implements OnChanges {
    @Input()
    detail: Passenger;

    @Output()
    edit: EventEmitter<Passenger> = new EventEmitter();

    @Output()
    remove: EventEmitter<Passenger> = new EventEmitter();

    editing: boolean = false;
    
    constructor(){}

    ngOnChanges(changes) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }

    onChangeName(value: string) {
      // console.log(value);
      this.detail.name = value;
    }

    onChangeNameToggle() { 
      this.editing = !this.editing;
      if (!this.editing) this.edit.emit(this.detail);
    }
    
    onRemove() {
      this.remove.emit(this.detail);
    }
}