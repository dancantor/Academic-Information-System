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

  goToContractPage(){}

  goToGradePage(){}
}
