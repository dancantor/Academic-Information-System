import { Component, OnInit } from '@angular/core';
import { AssignedCourse } from 'src/app/Models/AssignedCourse';
import { ProfileInformation } from 'src/app/Models/student.model';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent implements OnInit {

  user: ProfileInformation;
  datasource: Array<AssignedCourse>
  displayedColumns = ["Name", "Proffesor"]
  constructor(private http: HttpRequestsService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.http.getProfileInfoById(this.storageService.getUserId() || '', this.storageService.getUserType())
              .subscribe((response) => {
                this.user = response
                this.http.getAssignedCourses(this.user.id || '')
                          .subscribe(response => {
                          this.datasource = response;
              })
              })
    
  }

}
