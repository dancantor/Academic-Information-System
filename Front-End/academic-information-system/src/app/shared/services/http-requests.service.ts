import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileInformation } from 'src/app/Models/student.model';
import { environment } from 'src/environments/environment.prod';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  private apiURL = environment.apiURL;


  constructor(private http: HttpClient, private storageService: StorageService) { }

  getProfileInfoById(id: string, role:string): Observable<ProfileInformation> {
    return this.http.get<ProfileInformation>(`${this.apiURL}/${role}s/${id}`);
  }

  updateUserInfoById(role:string, user: ProfileInformation){
    return this.http.post(`${this.apiURL}/${role}s`, user)
  }
}
