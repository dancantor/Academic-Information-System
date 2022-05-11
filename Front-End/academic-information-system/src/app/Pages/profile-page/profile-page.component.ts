import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfileInformation } from 'src/app/Models/student.model';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { parseWebAPIErrors } from 'src/app/shared/utilities/utils';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user:  ProfileInformation;
  personalInformationForm : FormGroup;
  userId: string;
  role: string;
  msg: string[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private http: HttpRequestsService,
    private _storageService: StorageService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.user = {
      id: '0',
      age: 0,
      cnp: 0,
      first_name: '',
      last_name: ''
    }
    this.getUserInfo();
    this.createForm();
  }

  getUserInfo(): void{
    this.userId = this._storageService.getUserId() || '';
    this.role = this._storageService.getUserType();
    this.http.getProfileInfoById(this.userId, this.role)
      .subscribe(result => this.user = result);
  }
  createForm(): void {
    this.personalInformationForm = this._formBuilder.group({
        id: new FormControl(),
        first_name: new FormControl(),
        last_name: new FormControl(),
        CNP: new FormControl(),
        age: new FormControl()
    })
  }

  submitChanges(): void{
    this.http.updateUserInfoById(this.role, this.user).subscribe( response => {
      this.msg.pop();
      this._snackBar.open("Student updated!")}
      , error => this.msg = parseWebAPIErrors(error));
  }
  
}
