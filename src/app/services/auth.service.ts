import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = `${environment.backendOrigin}/auth`;
  constructor(private http: HttpClient, private routes: Router) {}
  login(email: string, password: string) {
    console.log(this.baseUrl);
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('del_todos_auth_token', res.token);
            this.routes.navigate(['todos']);
            console.log(res);
          }

          return;
        })
      );
  }

  logout() {
    localStorage.removeItem('del_todos_auth_token');
    this.routes.navigate(['']);
  }
}
