import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private router: Router) {
    this.deleteTokenEveryHour();
  }

  private deleteTokenEveryHour() {
    setInterval(() => {
      localStorage.removeItem('salesforce_token');
      this.router.navigate(['/login']);
    }, 3600000);
  }

  getToken(): string | null {
    return localStorage.getItem('salesforce_token');
  }
}