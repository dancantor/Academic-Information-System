import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { DialogComponent } from './../../shared/components/dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-main-page',
  templateUrl: './staff-main-page.component.html',
  styleUrls: ['./staff-main-page.component.scss']
})
export class StaffMainPageComponent implements OnInit {
  constructor(private router : Router, public dialog: MatDialog, 
    private http: HttpRequestsService, private snackBar: MatSnackBar) { }

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

  distributeOptionalCourses(){
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result){
        console.log('cv');
        this.http.distributeOptionals().subscribe(result => {
          this.snackBar.open('Distribution complete', 'Ok', {
            duration: 3000
          })
        }, error => this.snackBar.open('Error on distribution', 'Ok', {
          duration: 3000
        }))
      }
    })
  }


}
