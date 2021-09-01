import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  result!: { status: 'success' | 'error'; message: string };

  submit(form: NgForm) {
    if (form.value)
      this.auth.register(form.value).subscribe(
        (user) => {
          this.result = {
            status: 'success',
            message: 'Registracija sėkminga',
          };
          setTimeout(() => {
            this.modal.close();
            this.router.navigate(['appointments/new']);
          }, 1000);
        },
        (error) => (this.result = { status: 'error', message: 'Įvyko klaida' })
      );
  }

  constructor(private auth: AuthService, private router: Router, public modal: NgbActiveModal) {}
}
