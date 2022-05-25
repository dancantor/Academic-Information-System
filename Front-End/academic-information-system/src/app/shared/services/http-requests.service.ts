import { ProposedOptionalDto } from './../../Models/proposed-optional-dto';
import { CourseDto, CourseDtoSimple } from './../../Models/course-dto';
import { OptionalWithPreference } from './../../Models/optional-with-preference';
import { DisciplineWithId } from './../../Models/discipline-with-id';
import { Curriculum } from './../../Models/curriculum';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileInformation } from 'src/app/Models/student.model';
import { environment } from 'src/environments/environment.prod';
import { StorageService } from './storage.service';
import { AssignedCourse } from 'src/app/Models/AssignedCourse';
import { enrollment } from 'src/app/Models/enrollment';
import { GradeDto, GradeToPostDto } from 'src/app/Models/grade-dto';
import { SimpleStudent } from 'src/app/Models/student-simple';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  private apiURL = environment.apiURL;
  private devURL = environment.devURL;


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

  getAssignedCourses(id: string): Observable<Array<AssignedCourse>>{
    return this.http.get<Array<AssignedCourse>>(`${this.apiURL}/discipline/assigned/${id}`);
  }

  getEnrolledYears(id: string): Observable<enrollment>{
    return this.http.get<enrollment>(`${this.apiURL}/students/enroll/${id}`);
  }

  postEnrollmentYear(year: number, id: string): Observable<boolean>{
    return this.http.post<boolean>(`${this.apiURL}/students/enroll/${id}`, year);
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

  sendFileToServer(data: FormData){
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    };
    return this.http.post(`${this.apiURL}/students/upload-contract`, data, {'headers': headers});
  }

  getGrades(studId: number): Observable<Array<GradeDto>> {
    return this.http.get<Array<GradeDto>>(`${this.apiURL}/students/grades/${studId}`);
  }

  getCoursesByStudIdAndYear(studId: number, year: number): Observable<Array<CourseDto>>{
    return this.http.get<Array<CourseDto>>(`${this.apiURL}/discipline/courses?stud_id=${studId}&year=${year}`);
  }

  proposeCourse(optional: ProposedOptionalDto ) {
    return this.http.post(`${this.apiURL}/teachers/propose`, optional);
  }

  getAllStudents(): Observable<Array<SimpleStudent>> {
    return this.http.get<Array<SimpleStudent>>(`${this.devURL}/students`);
  }

  getCoursesForStudentByTeacher(studentId: string, teacherId: string): Observable<Array<CourseDtoSimple>>{
    return this.http.get<Array<CourseDtoSimple>>(`${this.devURL}/discipline/${teacherId}/${studentId}`);
  }

  postGrade(grade: GradeToPostDto){
    return this.http.post(`${this.devURL}/teachers/grade`, grade);
  }
  
  distributeOptionals() {
    return this.http.get(`${this.devURL}/staffs/distribute-optionals`);
  }
  getCourses(): Observable<Array<ProposedOptionalDTOWithProfName>>{
    return this.http.get<Array<ProposedOptionalDTOWithProfName>>(`${this.devURL}/teachers/courses`);
  }

  updateCourseApproval(courses: Array<ProposedOptionalDTOWithProfName>){
    return this.http.post(`${this.devURL}/teachers/approve`, courses);
  }
}
