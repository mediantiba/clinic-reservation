import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  now = DateTime.now();
  min = this.now.plus({ days: 1 });
  max = this.now.plus({ months: 6 });

  reservationMinDate: NgbDateStruct = {
    year: this.min.year,
    month: this.min.month,
    day: this.min.day
  };

  reservationMaxDate: NgbDateStruct = {
    year: this.max.year,
    month: this.max.month,
    day: this.max.day
  };

  submit(form: NgForm) {
    console.log(form.value);
  }
}
