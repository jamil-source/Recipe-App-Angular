import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('https://calm-bastion-61037.herokuapp.com/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('https://calm-bastion-61037.herokuapp.com/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('https://calm-bastion-61037.herokuapp.com/api/auth/user-profile');
  }

}