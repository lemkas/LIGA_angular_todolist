import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  email!: string;
  password!: string;
  message!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  AuthHandler(email: string, password: string) {
    if (email && password) {
      this.authService.login(email, password).subscribe();
      this.email = '';
      this.password = '';
    } else {
      this.message = email
        ? 'поле пароль должно быть заполненно'
        : 'поле логин должно быть заполнено';
    }
  }
}
