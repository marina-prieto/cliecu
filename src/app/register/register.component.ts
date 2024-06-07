import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  email: string = "";
  pwd1: string = "";
  pwd2: string = "";
  error: string = "";
  showPassword1: boolean = false;
  showPassword2: boolean = false;

  constructor(private router: Router, private service: UsersService) {}

  ngOnInit(): void {}

  registrar() {

    if (this.pwd1 !== this.pwd2) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    this.service.registrar(this.email, this.pwd1, this.pwd2).subscribe(
      () => {
        alert("Registro correcto");
        this.router.navigate(['/login']);
      },
      error => {
        this.error = error.error.message || 'Error en el registro';
      }
    );
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  togglePasswordVisibility(field: string) {
    if (field === 'pwd1') {
      this.showPassword1 = !this.showPassword1;
    } else if (field === 'pwd2') {
      this.showPassword2 = !this.showPassword2;
    }
  }
}
