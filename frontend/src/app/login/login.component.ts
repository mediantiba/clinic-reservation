import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  result!: { status: 'success' | 'error'; message: string };

  submit(form: NgForm) {
    if (form.value) {
      const { personalCode } = form.value;
      this.auth.login(personalCode).subscribe(
        (user) => {
          this.result = {
            status: 'success',
            message: 'Prisijungėte',
          };
          this.modal.close();
          this.router.navigate(['appointments/new']);
        },
        (error) => {
          this.result = { status: 'error', message: 'Įvyko klaida' };
        }
      );
    }
  }

  constructor(private auth: AuthService, private router: Router, public modal: NgbActiveModal) {}
}
