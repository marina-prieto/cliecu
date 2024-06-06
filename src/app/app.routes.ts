import { Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from './manager.service';

@Injectable({
  providedIn: 'root'
})

class AuthGuard implements CanActivate {
  constructor(private manager: ManagerService, private router: Router) {}

  canActivate(): boolean {
    if (this.manager.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'ecuaciones', component: EcuacionesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
