import { environment } from './../../environments/environment.prod';
import { UserLoginDto } from './../Models/user-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + "/Users";


  public login(user: UserLoginDto): Observable<Object> {
    return this.http.post(this.apiURL, user, {responseType: 'text'});
  } 
}
