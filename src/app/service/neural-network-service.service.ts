import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
export interface PredictionResponse {
  image: string[];
  prediction: number[];
}
@Injectable({
  providedIn: 'root'
})
export class NeuralNetworkService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  getHistory(): Observable<any>{
    const userId = this.cookieService.get('user-id');
    return this.http.get<any>(`http://localhost:8080/model/history?userId=${userId}`);
  }
  sendImage(file: File): Observable<any> {
    let formParams = new FormData();
    formParams.append('file', file)
    const userId = this.cookieService.get('user-id');
    
    console.log(formParams)
    return this.http.post<any>(`http://localhost:8080/model/upload?userId=${userId}`, formParams);
  }
}



