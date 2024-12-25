import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenService } from './services/token/token.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sales-dashboard';

  constructor(private tokenService: TokenService) {}
}
