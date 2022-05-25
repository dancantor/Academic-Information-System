import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProposedOptionalDTOWithProfName } from 'src/app/Models/proposed-optional-dto';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';


@Component({
  selector: 'app-approve-courses-table',
  templateUrl: './approve-courses-table.component.html',
  styleUrls: ['./approve-courses-table.component.scss']
})
export class ApproveCoursesTableComponent implements OnInit {

  dataSource: Array<ProposedOptionalDTOWithProfName>;
  requestArray: Array<ProposedOptionalDTOWithProfName>;
  alreadyApproved: Array<ProposedOptionalDTOWithProfName>;

  isApproved: boolean;
  displayedColumns= ['Name', 'TeacherName', 'NumberOfStudents', 'nrOfCredits', 'Year', 'isApproved'];

  constructor(private http: HttpRequestsService, private _snackBar: MatSnackBar) { 
    this.dataSource = new Array<ProposedOptionalDTOWithProfName>();
    this.requestArray = new Array<ProposedOptionalDTOWithProfName>();
    this.alreadyApproved = new Array<ProposedOptionalDTOWithProfName>();
  }

  ngOnInit(): void {
    this.getCoursesAndAssign();
  }

  getCoursesAndAssign(){
    this.http.getCourses().subscribe(response => {
      this.dataSource = response;
      this.dataSource.forEach(x => {
        if (x.isApproved === true){
          this.alreadyApproved.push(x);
        }
      })
      console.log(this.alreadyApproved)
    })
  }

  updateApprovals(){
    if (this.requestArray.length > 0){
      this.http.updateCourseApproval(this.requestArray).subscribe(() => {
        this.getCoursesAndAssign();
        this._snackBar.open("You succesfully approved a course", 'Yay');
      });
    } else{
      this._snackBar.open("You need to approve at least one course", 'OK')
    }
    
  }

  markAsChanged(course: ProposedOptionalDTOWithProfName){
    // console.log(course);
    this.requestArray.push(course);
  }

}
