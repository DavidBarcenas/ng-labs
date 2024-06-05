import { NgClass, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-auth-shell',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './auth-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthShellComponent {
  isRegister = input(false, {
    transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
  });
  sectionTitle = computed(() => (this.isRegister() ? 'Crea una cuenta' : 'Inicia sesión'));
  socialBtnText = computed(() => (this.isRegister() ? 'Registrarse' : 'Ingresar'));
}
