import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { equation } from './equation';
import { EcuacionesService } from '../ecuaciones.service';

@Component({
  selector: 'app-ecuaciones',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ecuaciones.component.html',
  styleUrl: './ecuaciones.component.css'
})
export class EcuacionesComponent {
  
  currentEquation : equation = new equation()
  equations : equation[] = []

  constructor(private service : EcuacionesService) {}
  
  add() {
    this.equations.push(this.currentEquation)
  }

  remove(equation: equation) {
    for (let i = 0 ; i < this.equations.length; i++) {
      if (this.equations[i] === equation) {
        this.equations.splice(i,1)
        break
      }
    }
  }

  generarHamiltoniano() {
    this.service.generarHamiltoniano(this.equations).subscribe(
      result => { 
        alert("fue bien")
      },
      error => {
        alert("error")
      }
    )
  }
}
