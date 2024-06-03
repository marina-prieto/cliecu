import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ecuaciones', component: EcuacionesComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];