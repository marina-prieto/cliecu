import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ManagerService {

  token?: string;
  
  //revisar token en almacenamiento local
  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      const savedToken = localStorage.getItem('token');
      this.token = savedToken !== null ? savedToken : undefined;
    }
  }

  //configurar token con token recibida
  setToken(token: string) {
    this.token = token;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  //vaciar token al cerrar sesión
  clearToken() {
    this.token = undefined;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }
}
