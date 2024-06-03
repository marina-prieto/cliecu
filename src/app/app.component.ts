import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
}