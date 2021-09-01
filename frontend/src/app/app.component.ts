import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  register() {
    const modalRef = this.modalService.open(RegisterComponent);
  }

  login() {
    const modalRef = this.modalService.open(LoginComponent);
  }

  logout() {
    this.auth.logout();
  }

  constructor(private modalService: NgbModal, public auth: AuthService) {}
}
