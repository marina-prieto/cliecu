import { Injectable } from '@angular/core';
import { equation } from './ecuaciones/equation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EcuacionesService {

  constructor(private client : HttpClient) { }

  generarHamiltoniano(token : string, equations : equation[]) {
    const headers = new HttpHeaders().set('token', token)

    return this.client.put("http://localhost:8080/ecuaciones/generarHamiltoniano", 
      equations, { 'headers' : headers })
  }

  ejecutarCodigo() {}
}
