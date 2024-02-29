import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcuacionesComponent } from './ecuaciones/ecuaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EcuacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliecu';
}
