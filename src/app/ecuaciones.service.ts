import { Injectable } from '@angular/core';
import { equation } from './ecuaciones/equation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcuacionesService {

  private apiUrl = 'http://localhost:8080';

  constructor(private client: HttpClient) { }

  generarHamiltoniano(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put(`${this.apiUrl}/ecuaciones/generarHamiltoniano`, equations, {
      headers,
      responseType: 'text' as 'json'
    });
  }

  ejecutarCodigo(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put(`${this.apiUrl}/dwave/ejecutarCodigo`, equations, {
      headers,
      responseType: 'text' as 'json'
    });
  }

  construirMatrizTriangular(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put<any>(`${this.apiUrl}/ecuaciones/generarMatrizTriangular`, equations, { headers });
  }

  generarCodigo(token: string, equations: equation[]): Observable<any> {
    const headers = new HttpHeaders().set('token', token);
    return this.client.put(`${this.apiUrl}/dwave/generarCodigo`, equations, {
      headers,
      responseType: 'text' as 'json'
    });
  }
}
