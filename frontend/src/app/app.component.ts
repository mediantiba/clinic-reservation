import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { Doctor } from './shared/models/doctor.model';
import { DoctorsService } from './shared/services/doctors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  doctors$: Observable<Doctor[]> = of([]);

  ngOnInit() {
    this.doctors$ = this.doctorsService.getDoctors();
  }

  register() {
    const modalRef = this.modalService.open(RegisterComponent);
  }

  submit(form: NgForm) {
    console.log(form.value);
  }

  constructor(private modalService: NgbModal, public doctorsService: DoctorsService) {}
}
