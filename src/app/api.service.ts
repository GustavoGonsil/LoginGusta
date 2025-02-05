import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'c:\Users\User\Desktop\TemTudoaqui\DentalHub\dental-hub-api\README.md '; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string, rememberMe: boolean): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password, rememberMe });
  }
}