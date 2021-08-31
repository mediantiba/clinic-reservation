import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.api + '/users';

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, { user });
  }

  constructor(private http: HttpClient) {}
}
