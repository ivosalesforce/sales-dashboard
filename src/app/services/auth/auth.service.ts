import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenUrl = '/services/oauth2/token';

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
      return tokenData;
    } catch (error) {
      console.error('Authentication failed', error);
      throw error;
    }
  }

  getToken(): string | null {
    return localStorage.getItem('salesforce_token');
  }

  logout() {
    localStorage.removeItem('salesforce_token');
  }
}
