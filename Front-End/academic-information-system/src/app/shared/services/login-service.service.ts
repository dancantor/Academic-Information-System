import { environment } from '../../../environments/environment.prod';
import { UserLoginDto } from '../../Models/user-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { User } from 'src/app/Models/genericUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  role: string;
  constructor(private http: HttpClient, private storageService: StorageService) { }
  private apiURL = environment.apiURL + "/Users";


  public login(user: UserLoginDto): Observable<string> {
    return this.http.post<string>(this.apiURL, user).pipe(tap((response: string) =>{
      // TODO maybe change this to storage service
      localStorage.setItem('userId', response);
    }))
  }
}
