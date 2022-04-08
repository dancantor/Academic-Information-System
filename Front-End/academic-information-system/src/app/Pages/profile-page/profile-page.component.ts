import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { tap } from 'rxjs/operators';
import { ProfileInformation } from 'src/app/Models/student.model';
import { StorageService } from 'src/app/shared/services/storage.service';

const student1: ProfileInformation = {
  id: '1',
  first_name: 'vasile',
  last_name: 'mure',
  age: 21,
  CNP: 222222222222
};

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  student:  ProfileInformation;
  personalInformationForm : FormGroup;
  userId: string;
  role: string;

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpClient,
    private _storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.createForm();
  }

  getUserInfo(): void{
    this.userId = this._storageService.getUserId() || '';
    this.role = this._storageService.getUserType();
    this.http.get<ProfileInformation>(`/api/${this.role}/${this.userId}`)
      .pipe(tap((response: ProfileInformation) => {
        this.student = response;
      }));
  }
  createForm(): void {
    this.personalInformationForm = this._formBuilder.group({
      // Using the student1 mock
        id: new FormControl({value: student1.id, disabled: true}),
        first_name: new FormControl(student1.first_name),
        last_name: new FormControl(student1.last_name),
        CNP: new FormControl({value: student1.CNP, disabled: true}),
        age: new FormControl(student1.age)
    })
  }

  submitChanges(): void{
    this.http.post(`/api/${this.role}/${this.userId}`, student1)
  }
}
