import { Injectable } from '@angular/core';
import { equation } from './ecuaciones/equation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcuacionesService {

  constructor(private client : HttpClient) { }

  generarHamiltoniano(equations : equation[]) {
    return this.client.put("http://localhost:8080/ecuaciones/generarHamiltoniano", equations)
  }
}
