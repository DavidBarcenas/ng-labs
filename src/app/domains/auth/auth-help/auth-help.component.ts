import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-help',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './auth-help.component.html',
})
export class AuthHelpComponent {}
