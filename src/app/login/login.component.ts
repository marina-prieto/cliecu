import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = ""
  pwd: string = ""
  error: string = ""

  constructor(private service: UsersService) {}

  login() {
    this.service.login(this.email, this.pwd).subscribe(
      result => {
        localStorage.setItem("token", result.token)
        sessionStorage.setItem("token", result.token)
      },
      error => {
        this.error = error
      }
    )
  }
}
