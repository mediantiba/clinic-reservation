import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { RegisterComponent } from './register/register.component';
import { TimeGridComponent } from './shared/components/time-grid/time-grid.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NewAppointmentComponent,
    MyAppointmentsComponent,
    UnauthorizedComponent,
    TimeGridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
