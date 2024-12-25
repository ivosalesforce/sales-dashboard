import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environment';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  private tokenUrl = '/services/oauth2/token';
  
  constructor(private router: Router) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(this.checkToken());
  }

  async login(username: string, password: string): Promise<any> {
    const params = new URLSearchParams();
    params.append('Content-Type', 'application/x-www-form-urlencoded');
    params.append('grant_type', 'password');
    params.append('client_id', environment.salesforce.clientId);
    params.append('client_secret', environment.salesforce.clientSecret);
    params.append('username', username);
    params.append('password', password);

    try {
      const response = await axios.post(this.tokenUrl, params);
      const tokenData = response.data;
      localStorage.setItem('salesforce_token', tokenData.access_token);
      this.isAuthenticatedSubject.next(true);
      return tokenData;
    } catch (error) {
      console.error('Authentication failed', error);
      throw error;
    }
  }

  checkToken(): boolean {
    const token = localStorage.getItem('salesforce_token');
    return token ? true : false;
  }

  // Observable to subscribe to the authentication state
  get isAuthenticated$() {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout(): void {
    localStorage.removeItem('salesforce_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }
}
