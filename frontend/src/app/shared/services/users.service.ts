import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appointment } from '../models/appointment.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.api + '/users';

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, { user });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(personalCode: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${personalCode}`);
  }

  getUserAppointments(personalCode: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.url}/${personalCode}/appointments`)
  }

  constructor(private http: HttpClient) {}
}
