import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "http://localhost:9000/users";

  constructor(private client: HttpClient) { }

  registrar(email: string, pwd1: string, pwd2: string): Observable<any> {
    let info = {
      email: email,
      pwd1: pwd1,
      pwd2: pwd2
    };
    return this.client.post(`${this.baseUrl}/registrar`, info);
  }

  login(email: string, pwd: string): Observable<any> {
    let info = {
      email: email,
      pwd: pwd
    };
    return this.client.put(`${this.baseUrl}/login`, info);
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.client.post(`${this.baseUrl}/reset-password-request`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.client.post(`${this.baseUrl}/reset-password`, { token, newPassword });
  }
}
