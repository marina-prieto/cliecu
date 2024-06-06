import { Routes, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from './manager.service';

@Injectable({
  providedIn: 'root'
})

class AuthGuard implements CanActivate {
  constructor(private manager: ManagerService, private router: Router) {}

  //comprobación de token en local, de lo contrario, login
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
  { path: 'ecuaciones', component: EcuacionesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
