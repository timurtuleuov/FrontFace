import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {
  token: string = ""

  constructor(private http: HttpClient) { }

  get(url: string): any{
    return this.http.get("http://localhost:8080" + url);
  }

  getPrivate(url: string): any {
    return this.http.get("http://localhost:8080" + url, 
    {headers: new HttpHeaders({"Authorization": "Bearer " + this.token})});
  }

  // getToken(code: string): Observable<boolean>{

  // }
}
