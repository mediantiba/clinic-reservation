import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-time-grid',
  templateUrl: './time-grid.component.html',
  styleUrls: ['./time-grid.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TimeGridComponent, multi: true }
  ]
})
export class TimeGridComponent implements OnInit, ControlValueAccessor {
  hours: string[] = [];
  selectedTime: string = '';

  ngOnInit() {
    for (let i = DateTime.fromObject({ hour: 8 }); i < DateTime.fromObject({ hour: 17 }); i = i.plus({ minutes: 40 })) {
      this.hours.push(i.toFormat('HH:mm'));
    }
  }

  onSelect(time: string) {
    this.selectedTime = time;
    this.onTouch();
    this.onChange(this.selectedTime);
  }

  writeValue(value: string): void {
    this.selectedTime = value;
  }

  onChange = (selectedTime: string) => {};

  registerOnChange(fn: any) {
     this.onChange = fn;
  }

  onTouch = () => {};

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }
}
