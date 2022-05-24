import { enrollment } from 'src/app/Models/enrollment';
import { Component, OnInit } from '@angular/core';
import { CourseDto } from 'src/app/Models/course-dto';
import { ProfileInformation } from 'src/app/Models/student.model';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {
  user: ProfileInformation;
  years: enrollment;
  courses: CourseDto[] = [];
  courses2: CourseDto[] = [];
  columnsToDisplay = ['Name', 'ProfessorName', 'NrOfCredits', 'Type'];
  constructor(private http: HttpRequestsService, private storage: StorageService) { }

  ngOnInit(): void {
    this.http.getProfileInfoById(this.storage.getUserId() || '', this.storage.getUserType()).subscribe(
      result1 => {
        this.user = result1;
        this.http.getEnrolledYears(this.user.id).subscribe(years => {
          this.years = years;
          this.http.getCoursesByStudIdAndYear(parseInt(this.user.id), years.year1).subscribe(result => {
            this.courses = result;
          })
          this.http.getCoursesByStudIdAndYear(parseInt(this.user.id), years.year2).subscribe(result => {
            this.courses2 = result;
          })
        })
        
      }
    )
  }

}
