import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-main-page',
  templateUrl: './staff-main-page.component.html',
  styleUrls: ['./staff-main-page.component.scss']
})
export class StaffMainPageComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  goToViewStudentsByGroup(): void{
  }

  goToViewStudentsByYear(){
  }

  goToViewStudentsByGrades(){
  }

  goToFilterStudents() {
  }

  goToDecideStudyingGrants(){
  }

  goToGradePage(){
    this.router.navigate(['student/view-grades']);
  }

  goToViewCoursesforStudent() {
    this.router.navigate(['student/view-courses'])
  }

}
