import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserData() {
    return JSON.parse(localStorage.getItem('user_data') || '{}');
  }

  setUserData(data: any) {
    localStorage.setItem('user_data', JSON.stringify(data));
  }

  clearUserData() {
    localStorage.removeItem('user_data');
    localStorage.removeItem('access_token');
  }
}
