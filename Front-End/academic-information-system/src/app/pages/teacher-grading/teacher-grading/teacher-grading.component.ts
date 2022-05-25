import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseDto, CourseDtoSimple } from 'src/app/Models/course-dto';
import { GradeToPostDto } from 'src/app/Models/grade-dto';
import { SimpleStudent } from 'src/app/Models/student-simple';
import { ProfileInformation } from 'src/app/Models/student.model';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-teacher-grading',
  templateUrl: './teacher-grading.component.html',
  styleUrls: ['./teacher-grading.component.scss']
})
export class TeacherGradingComponent implements OnInit {

  selectStudent: FormControl;
  selectCourse: FormControl;
  gradeValue: FormControl;

  students: Array<SimpleStudent>;
  courses: Array<CourseDtoSimple>;
  grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  formBuilder: FormBuilder;
  myFormGroup: FormGroup;

  constructor(private http: HttpRequestsService, private storage: StorageService, private snack: MatSnackBar) {
    this.students = new Array<SimpleStudent>();
    this.formBuilder = new FormBuilder();
   }

  ngOnInit(): void {
    this.getStudents();
    // this.getCoursesForTeacherAndStudent();
    this.myFormGroup = this.formBuilder.group({
      selectStudent: ['', Validators.required ],
      selectCourse: ['', Validators.required],
      gradeValue: ['', Validators.required]
    }
    )
  }

  getStudents(){
    this.http.getAllStudents().subscribe(response => {
      this.students = response;
      console.log(this.students)
    })
  }

  getCoursesForTeacherAndStudent(){
    let teacherId: string;
    this.http.getProfileInfoById(this.storage.getUserId() || '', this.storage.getUserType()).subscribe(res => {
      teacherId = res.id;
      let studentId = this.myFormGroup.controls['selectStudent'].value;
      this.http.getCoursesForStudentByTeacher(studentId, teacherId).subscribe(res => {
        this.courses = res;
      })
    });
    
  }

  isCourseTypeDisabled(): boolean{
    if (this.myFormGroup.controls['selectStudent'].pristine)
      return true;
    return false;
  }

  isGradeDisabled(): boolean{
    if (this.myFormGroup.controls['selectCourse'].pristine)
      return true;
    return false;
  }

  saveChanges(){
    let grade = new GradeToPostDto()
    grade.studentId = this.myFormGroup.controls['selectStudent'].value,
    grade.courseId = this.myFormGroup.controls['selectCourse'].value,
    grade.value = this.myFormGroup.controls['gradeValue'].value
    console.log(grade);
    this.http.postGrade(grade).subscribe(response => this.snack.open("You sucesfully graded this student", ":)"),
    error => this.snack.open("This student already has a grade for this course!", ':('))
  }

}
