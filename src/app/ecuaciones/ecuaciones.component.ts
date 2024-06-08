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
  styleUrls: ['./ecuaciones.component.css']
})
export class EcuacionesComponent {

  currentEquation: equation = new equation();
  equations: equation[] = [];
  respuesta?: string;

  constructor(private service: EcuacionesService, private manager: ManagerService) {}

  add() {
    this.equations.push(this.currentEquation);
    this.currentEquation = new equation();
  }

  remove(equation: equation) {
    const index = this.equations.indexOf(equation);
    if (index > -1) {
      this.equations.splice(index, 1);
    }
  }

  generarHamiltoniano() {
    if (this.manager.token) {
      this.service.generarHamiltoniano(this.manager.token, this.equations).subscribe(
        result => {
          this.respuesta = result;
        },
        error => {
          console.error('Error generando Hamiltoniano:', error);
        }
      );
    } else {
      alert("Token no disponible");
    }
  }

  construirMatrizTriangular() {
    if (this.manager.token) {
      this.service.construirMatrizTriangular(this.manager.token, this.equations).subscribe(
        result => {
          this.respuesta = result;
        },
        error => {
          alert("Error construyendo matriz triangular");
        }
      );
    } else {
      alert("Token inválido");
    }
  }

  generarCodigo() {
    if (this.manager.token) {
      this.service.generarCodigo(this.manager.token, this.equations).subscribe(
        result => {
          this.respuesta = result;
        },
        error => {
          alert("Error generando código DWave");
        }
      );
    } else {
      alert("Token inválido");
    }
  }

  ejecutarCodigo() {
    if (this.manager.token) {
      this.service.ejecutarCodigo(this.manager.token, this.equations).subscribe(
        result => {
          this.respuesta = result;
        },
        error => {
          console.error('Error ejecutando código:', error);
          alert("Error");
        }
      );
    } else {
      alert("Token no disponible");
    }
  }
}
