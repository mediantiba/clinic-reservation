import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateTime } from 'luxon';
import { Observable, of } from 'rxjs';
import { Appointment } from '../shared/models/appointment.model';
import { Doctor } from '../shared/models/doctor.model';
import { User } from '../shared/models/user.model';
import { AppointmentsService } from '../shared/services/appointments.service';
import { AuthService } from '../shared/services/auth.service';
import { DoctorsService } from '../shared/services/doctors.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss'],
})
export class NewAppointmentComponent implements OnInit {
  now = DateTime.now();
  min = this.now.plus({ days: 1 });
  max = this.now.plus({ months: 6 });

  appointmentMinDate: NgbDateStruct = {
    year: this.min.year,
    month: this.min.month,
    day: this.min.day,
  };

  appointmentMaxDate: NgbDateStruct = {
    year: this.max.year,
    month: this.max.month,
    day: this.max.day,
  };

  doctors$: Observable<Doctor[]> = of([]);
  currentUser$: Observable<User | null> = of(null);
  appointments$: Observable<Appointment[]> = of([]);

  result!: { status: 'success' | 'error'; message: string };

  ngOnInit() {
    this.doctors$ = this.doctorsService.getDoctors();
    this.currentUser$ = this.auth.currentUser$;
    this.appointments$ = this.appointmentsService.getAppointments();
  }

  submit(form: NgForm) {
    form.value.date = DateTime.fromObject(form.value.date).toJSON();
    this.appointmentsService.addAppointment(form.value).subscribe(
      (appointment) => {
        this.result = { status: 'success', message: 'Registracija sėkminga'};
        setTimeout(() => {
          this.router.navigate(['appointments']);
        }, 1000);
      },
      (error) => (this.result = { status: 'error', message: 'Įvyko klaida'})
    );
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private appointmentsService: AppointmentsService,
    public doctorsService: DoctorsService
  ) {}
}
