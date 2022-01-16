import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor() { }

  setToken(token: string) {
    this.token = token;
  }

  getToken(token: string): string {
    return this.token;
  }

}
