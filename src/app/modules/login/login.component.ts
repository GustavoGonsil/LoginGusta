import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: '.',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private apiService: ApiService) {}

  onLogin() {
    this.apiService.login(this.username, this.password, this.rememberMe).subscribe(
      response => {
        console.log('Login bem-sucedido', response);
      },
      error => {
        console.error('Erro no login', error);
      }
    );
  }
}