import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  async onLogin() {
    try {
      const tokenData = await this.authService.login(this.username, this.password);
      console.log('Authentication successful', tokenData);
      window.location.href = '/';
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  }
}
