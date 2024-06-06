import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ManagerService } from './manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    EcuacionesComponent,
    LoginComponent,
    RegisterComponent,
    MatToolbarModule,
    MatButtonModule
  ]
})

export class AppComponent {
  title = 'cliecu';

  constructor(private manager: ManagerService, private router: Router) {}

  //comprobar si está iniciado en base a si el manager tiene token en sí o no
  isLoggedIn(): boolean {
    return !!this.manager.token;
  }

  //cierre de sesión del manager, limpiar token y volver a login
  logout() {
    this.manager.clearToken();
    this.router.navigate(['/login']);
  }
}
