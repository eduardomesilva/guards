import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _authService = inject(AuthService)



  login(){
    this._authService.login('user', 'user').subscribe(response => {
      console.log('Response Login', response)
    })
  }
  
}
