import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EcuacionesComponent, LoginComponent, RegisterComponent]
})
export class AppComponent {
  title = 'cliecu';
}
