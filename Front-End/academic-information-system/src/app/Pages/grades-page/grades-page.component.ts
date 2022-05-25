import { ProfileInformation } from './../../Models/student.model';
import { StorageService } from './../../shared/services/storage.service';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { Component, OnInit } from '@angular/core';
import { GradeDto } from 'src/app/Models/grade-dto';

@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrls: ['./grades-page.component.scss']
})
export class GradesPageComponent implements OnInit {
  user: ProfileInformation;
  grades: GradeDto[] = [];
  columnsToDisplay = ['Course', 'Grade'];
  constructor(private http: HttpRequestsService, private storage: StorageService) { }

  ngOnInit(): void {
    this.http.getProfileInfoById(this.storage.getUserId() || '', this.storage.getUserType()).subscribe(
      result1 => {
        this.user = result1;
        this.http.getGrades(parseInt(this.user.id)).subscribe(result => {
          this.grades = result;
          console.log(this.grades);
        })
      }
    )
  }

}
