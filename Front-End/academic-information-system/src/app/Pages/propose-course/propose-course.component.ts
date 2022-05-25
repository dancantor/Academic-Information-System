import { ProposedOptionalDto } from './../../Models/proposed-optional-dto';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propose-course',
  templateUrl: './propose-course.component.html',
  styleUrls: ['./propose-course.component.scss']
})
export class ProposeCourseComponent implements OnInit {
  courseConfig: FormGroup;

  constructor(private router: Router, private http:HttpRequestsService,
              private formBuilder: FormBuilder, private snackBar: MatSnackBar,
              private storage: StorageService) { 
      this.courseConfig = formBuilder.group({
        name: new FormControl('', [Validators.required]),
        noOfStudents: new FormControl('', [Validators.required]),
        correspondingYear: new FormControl('', [Validators.required]),
        noOfCredits: new FormControl('', [Validators.required]),
      })
  }

  ngOnInit(): void {
    
  }

  saveCourse(){ 
    const id = this.storage.getUserId()
    if (id === null){
      this.snackBar.open('Error on proposing optional', 'Ok', {
        duration: 3000
      })
      return
    }
    // let course: ProposedOptionalDto = {
    //   teacherId: +id,

    // }
    this.http.proposeCourse({teacherId: id, ...this.courseConfig.value}).subscribe(result =>{
      this.snackBar.open('Optional successfully proposed', 'Ok', {
        duration: 3000
      });
    }, error => this.snackBar.open('Error on proposing optional'));
  }

  getErrorMessageFieldName() {
    var field = this.courseConfig.get('courseName')
    if (field?.hasError('required')){
      return 'Name of the course is required';
    }
    field = this.courseConfig.get('noOfStudentsConfig')
    if (field?.hasError('required')){
      return 'Number of students is required'
    }
    field = this.courseConfig.get('yearConfig')
    if (field?.hasError('required')){
      return 'Year is required'
    }
    field = this.courseConfig.get('creditsConfig')
    if (field?.hasError('required')){
      return 'No of credits is required'
    }
    return '';
  }

}
