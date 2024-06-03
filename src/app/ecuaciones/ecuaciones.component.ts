import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { equation } from './equation';
import { EcuacionesService } from '../ecuaciones.service';
import { ManagerService } from '../manager.service';

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
  respuesta? : string

  constructor(private service : EcuacionesService, private manager : ManagerService) {}
  
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

  //ME FALTAN COSAS POR AQUI POR ACA Y POR TODAS PARTES!!
  generarHamiltoniano() {
    if (this.manager.token) {
      this.service.generarHamiltoniano(this.manager.token, this.equations).subscribe(
        result => { 
          //this.respuesta = result.respuesta
        },
        error => {
          alert("error")
        }
      )
    }
  }
}
