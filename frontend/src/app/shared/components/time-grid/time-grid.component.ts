import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-time-grid',
  templateUrl: './time-grid.component.html',
  styleUrls: ['./time-grid.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TimeGridComponent, multi: true },
  ],
})
export class TimeGridComponent implements OnInit, ControlValueAccessor {
  hours: string[] = [];
  selectedTime: string = '';

  @Input() selectedDoctor: string | null = null;
  @Input() selectedDate: NgbDateStruct | null = null;
  @Input() appointments: Appointment[] | null = [];

  isDisabled(hour: string) {
    return this.appointments?.some((a) => {
      return (
        a.doctor?._id === this.selectedDoctor &&
        DateTime.fromISO(a.date).month === this.selectedDate?.month &&
        DateTime.fromISO(a.date).day === this.selectedDate?.day &&
        a.time === hour
      );
    });
  }

  ngOnInit() {
    for (
      let i = DateTime.fromObject({ hour: 8 });
      i < DateTime.fromObject({ hour: 17 });
      i = i.plus({ minutes: 40 })
    ) {
      this.hours.push(i.toFormat('HH:mm'));
    }
  }

  onSelect(time: string, input: HTMLInputElement) {
    if (this.isDisabled(time)) return;
    input.checked = true;
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
