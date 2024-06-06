import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  pwd: string = "";
  error: string = "";

  constructor(private service: UsersService, private manager: ManagerService, private router: Router) {}

  login() {
    this.service.login(this.email, this.pwd).subscribe(
      result => {
        this.manager.token = result.token; // Usamos el setter de la propiedad token
        alert("Inicio de sesión correcto");
        this.router.navigate(['/ecuaciones']);
      },
      error => {
        this.error = error.error.message || 'Error en el inicio de sesión';
      }
    );
  }

  goToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
