import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private googleAuthUrl = 'https://localhost/oauth2/code/google';
  loginWithGoogle(): Observable<any> {
    return this.http.get<any>(this.googleAuthUrl);
  }
  url = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }
  signUp(user: User): Observable<any>{
    return this.http.post<User>(`${this.url}auth/sign-up`, user);
    
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwtDecode(token);;
    } catch(Error) {
      return null;
    }
  }
  getToken(username: string, password: string): Observable<any>{
    return this.http.post<User>(`${this.url}auth/sign-in`, {'username': username, 'password': password});
  }
}
