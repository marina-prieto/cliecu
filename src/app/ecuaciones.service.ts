import { Injectable } from '@angular/core';
import { equation } from './ecuaciones/equation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcuacionesService {

  constructor(private client: HttpClient) { }

  generarHamiltoniano(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put<any>("http://localhost:8080/ecuaciones/generarHamiltoniano", equations, { headers });
  }

  ejecutarCodigo(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put<any>("http://localhost:8080/dwave/ejecutarCodigo", equations, { headers });
  }

  construirMatrizTriangular(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put<any>("http://localhost:8080/ecuaciones/construirMatrizTriangular", equations, { headers });
  }

  generarCodigo(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put<any>("http://localhost:8080/dwave/generarCodigo", equations, { headers });
  }
}
