import { ProfileInformation } from 'src/app/Models/student.model';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';

@Component({
  selector: 'app-teacher-main-page',
  templateUrl: './teacher-main-page.component.html',
  styleUrls: ['./teacher-main-page.component.scss']
})
export class TeacherMainPageComponent implements OnInit {
  constructor(private router : Router, private storage: StorageService, private http: HttpRequestsService){  }
  user: ProfileInformation;

  ngOnInit(): void {
    this.http.getProfileInfoById(this.storage.getUserId() || '', this.storage.getUserType())
      .subscribe(result => {
        this.user = result; console.log(this.user.last_name)
        console.log(this.user.isChief);
      });
  }

  goToAddGrades(): void{
    this.router.navigate(['teacher/grading']);
  }

  goToProposeCourses(){
    this.router.navigate(['teacher/propose-course']);
  }

  goToApproveOptionals(){
    this.router.navigate(['teacher/approve-courses']);
  }

  goToSpecifyCapacity() {
  }

  goToViewResultsByTeacher(){
  }

  goToViewDisciplinesByTeacher(){
  }

  goToViewResultsByDiscipline() {
  }

}
