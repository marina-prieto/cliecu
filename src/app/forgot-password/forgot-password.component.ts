import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = "";
  error: string = "";
  message: string = "";

  constructor(private router: Router, private service: UsersService) {}

  requestPasswordReset() {
    this.service.requestPasswordReset(this.email).subscribe(
      result => {
        this.message = "Correo de recuperación enviado";
        this.error = "";
      },
      error => {
        this.error = error.error.message || 'Error al enviar el correo de recuperación';
        this.message = "";
      }
    );
  }

  goBack() {
    this.router.navigate(['/login']);
  }
}

