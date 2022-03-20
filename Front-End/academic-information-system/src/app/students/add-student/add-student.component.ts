import { studentCreationDTO } from './../Model/student.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private router: Router) { }
  form: FormGroup;
  
  ngOnInit(): void {
  }

  saveChanges(studentCreationDTO: studentCreationDTO): void {
    console.log(studentCreationDTO);
    this.router.navigate(['/student']);
  }

 
}
