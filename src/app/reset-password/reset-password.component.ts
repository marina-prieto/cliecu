import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent {
  newPassword: string = "";
  confirmPassword: string = "";
  error: string = "";
  message: string = "";
  token: string = "";
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  constructor(private service: UsersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.error = "Las contraseñas no coinciden";
      return;
    }
    this.service.resetPassword(this.token, this.newPassword).subscribe(
      result => {
        this.message = "Contraseña restablecida correctamente";
        this.error = "";
        this.router.navigate(['/login']);
      },
      error => {
        this.error = error.error.message || 'Error al restablecer la contraseña';
        this.message = "";
      }
    );
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
