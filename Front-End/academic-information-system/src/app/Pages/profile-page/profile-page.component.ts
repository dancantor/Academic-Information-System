import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { tap } from 'rxjs/operators';
import { Student } from 'src/app/Models/student.model';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  student:  Student;
  personalInformationForm : FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private _storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getStudentInfo();
    this.createForm();
  }

  getStudentInfo(): void{
    let userId = this._storageService.getUser();
    this.http.get<Student>(`/api/students/${userId}`)
      .pipe(tap((response: Student) => {
        this.student = response;
      }))
  }
  createForm(): void {
    this.personalInformationForm = this._formBuilder.group({
        id: new FormControl({value: this.student.id})
    })
  }
}
