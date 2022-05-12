import { OptionalWithPreference } from './../../Models/optional-with-preference';
import { DisciplineWithId } from './../../Models/discipline-with-id';
import { Curriculum } from './../../Models/curriculum';
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

  getDisciplinesByYear(year: number): Observable<Array<Curriculum>> {
    return this.http.get<Array<Curriculum>>(`${this.apiURL}/discipline/${year}`);
  }

  getOptionalDisciplines(): Observable<Array<DisciplineWithId>> {
    return this.http.get<Array<DisciplineWithId>>(`${this.apiURL}/discipline`);
  }

  getOptionalSortedByPriority(studID: number): Observable<Array<DisciplineWithId>> {
    return this.http.get<Array<DisciplineWithId>>(`${this.apiURL}/discipline/optional/${studID}`)
  }

  insertOptionalPreferedDiscipline(opt: OptionalWithPreference){
    return this.http.post(`${this.apiURL}/discipline/temporary-optional`, opt);
  }
}
