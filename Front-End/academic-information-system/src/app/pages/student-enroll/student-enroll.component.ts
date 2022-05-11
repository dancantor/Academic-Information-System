import { Component, OnInit } from '@angular/core';
import { enrollment } from 'src/app/Models/enrollment';
import { ProfileInformation } from 'src/app/Models/student.model';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.scss']
})
export class StudentEnrollComponent implements OnInit {
  
  text1: string;
  text2: string;
  text3: string;
  enrollment: enrollment;

  user: ProfileInformation;

  constructor(private http : HttpRequestsService, private storageService: StorageService, private snackbar: MatSnackBar) {
    
  }

  ngOnInit(): void {
    this.http.getProfileInfoById(this.storageService.getUserId() || '', this.storageService.getUserType()).subscribe((response) => {
      this.user = response;
      this.http.getEnrolledYears(this.user.id).subscribe((response) => {this.enrollment = response
      if (this.enrollment.year1 === 1 || this.enrollment.year2 === 1)
        this.text1 = "Already enrolled";
      else
        this.text1 = "Enroll";

      if (this.enrollment.year1 === 2 || this.enrollment.year2 === 2)
        this.text2 = "Already enrolled";
      else
        this.text2 = "Enroll";

      if (this.enrollment.year1 === 3 || this.enrollment.year2 === 3)
        this.text3 = "Already enrolled";
      else
        this.text3 = "Enroll";

      })
    })
  }

  enroll(year: number){
    if (this.enrollment.year1 !== 0 && this.enrollment.year2 !== 0){
      this.snackbar.open("Already enrolled to 2 years", "Am inteles");
    }
    else {
      this.http.postEnrollmentYear(year, this.user.id).subscribe(() => this.snackbar.open("You succesfully enrolled to a year", "Good"));
      this.enrollment.year1
    }
  }
}
