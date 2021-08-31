import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  result!: { status: 'success' | 'error'; message: string };

  submit(form: NgForm) {
    if (form.value)
      this.usersService.addUser(form.value).subscribe(
        (user) =>
          (this.result = {
            status: 'success',
            message: 'Registracija sėkminga',
          }),
        (error) => (this.result = { status: 'error', message: 'Įvyko klaida' })
      );
  }

  constructor(private usersService: UsersService) {}
}
