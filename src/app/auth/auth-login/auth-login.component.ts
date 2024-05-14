import { Component } from '@angular/core';
import { AuthShellComponent } from "../auth-shell/auth-shell.component";

@Component({
    selector: 'app-auth-login',
    standalone: true,
    templateUrl: './auth-login.component.html',
    styleUrl: './auth-login.component.scss',
    imports: [AuthShellComponent]
})
export class AuthLoginComponent {

}
