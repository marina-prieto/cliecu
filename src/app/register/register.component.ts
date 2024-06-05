import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../users.service';
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

  constructor(private service: UsersService) {}

  ngOnInit(): void {}

  registrar() {
    this.service.registrar(this.email, this.pwd1, this.pwd2).subscribe(
      () => {
        alert("Registro correcto");
      },
      error => {
        this.error = error.error.message || 'Error en el registro';
      }
    );
  }
}
