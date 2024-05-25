import { Component, signal } from '@angular/core';
import { AuthShellComponent } from "../auth-shell/auth-shell.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-auth-register',
    standalone: true,
    templateUrl: './auth-register.component.html',
    imports: [AuthShellComponent, RouterLink]
})
export class AuthRegisterComponent {
  showPass = signal(false);

  togglePass() {
    this.showPass.update((value) => !value);
  }
}
