import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  get isAuthenticated$(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }

  get currentUser$(): Observable<User | null> {
    return this.user$.asObservable();
  }

  register(user: User) {
    return this.usersService
      .addUser(user)
      .pipe(tap((user) => this.user$.next(user)));
  }

  login(personalCode: string) {
    return this.usersService
      .getUser(personalCode)
      .pipe(tap((user) => this.user$.next(user)));
  }

  logout() {
    this.user$.next(null);
  }

  constructor(private usersService: UsersService) {}
}
