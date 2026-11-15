import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (this.usuario.trim() && this.password.trim()) {
      localStorage.setItem('usuarioActivo', this.usuario);
      this.router.navigate(['/catalogo']);
    } else {
      this.error = 'Por favor ingresa usuario y contraseña.';
    }
  }
}