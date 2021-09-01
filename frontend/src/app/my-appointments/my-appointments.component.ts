import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Appointment } from '../shared/models/appointment.model';
import { AuthService } from '../shared/services/auth.service';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss'],
})
export class MyAppointmentsComponent implements OnInit {
  appointments$: Observable<Appointment[]> = of([]);

  ngOnInit() {
    this.appointments$ = this.auth.currentUser$.pipe(
      switchMap((user) =>
        this.usersService.getUserAppointments(user?.personalCode!)
      )
    );
  }

  constructor(private usersService: UsersService, private auth: AuthService) {}
}
