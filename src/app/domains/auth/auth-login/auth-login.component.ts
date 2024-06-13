import { Component, signal } from '@angular/core';
import { AuthShellComponent } from '../auth-shell/auth-shell.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  templateUrl: './auth-login.component.html',
  imports: [AuthShellComponent, RouterLink],
})
export class AuthLoginComponent {
  showPass = signal(false);

  togglePass() {
    this.showPass.update((value) => !value);
  }
}
