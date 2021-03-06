import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrls: ['./student-main-page.component.scss']
})
export class StudentMainPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToViewCurriculumPage(): void{
    this.router.navigate(['student/curriculum'])
  }

  goToEnrollPage(){
    this.router.navigate(['student/enroll']);
  }

  goToOptionalPage(){
    this.router.navigate(['student/optional-courses']);
  }

  goToAssignedOptionalsPage() {
    this.router.navigate(['student/assigned-optional-courses'])
  }

  goToContractPage(){
    this.router.navigate(['student/sign-contract']);
  }

  goToGradePage(){
    this.router.navigate(['student/view-grades']);
  }

  goToViewCoursesforStudent() {
    this.router.navigate(['student/view-courses'])
  }
}
