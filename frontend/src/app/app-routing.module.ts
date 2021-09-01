import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Route[] = [
  {
    path: 'reservations/new',
    component: NewReservationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reservations',
    component: MyReservationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'reservations/new',
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
