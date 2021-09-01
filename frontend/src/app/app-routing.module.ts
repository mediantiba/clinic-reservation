import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';

const routes: Route[] = [
  {
    path: 'new-reservation',
    component: NewReservationComponent
  },
  {
    path: 'my-reservations',
    component: MyReservationsComponent
  },
  {
    path: '',
    redirectTo: 'new-reservation',
    pathMatch: 'full'
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
