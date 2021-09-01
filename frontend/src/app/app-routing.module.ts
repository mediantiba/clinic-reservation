import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Route[] = [
  {
    path: 'appointments/new',
    component: NewAppointmentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'appointments',
    component: MyAppointmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'appointments/new',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: UnauthorizedComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
