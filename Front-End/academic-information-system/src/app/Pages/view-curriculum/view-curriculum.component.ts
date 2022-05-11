import { Component, OnInit } from '@angular/core';
import { Curriculum } from 'src/app/Models/curriculum';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';

@Component({
  selector: 'app-view-curriculum',
  templateUrl: './view-curriculum.component.html',
  styleUrls: ['./view-curriculum.component.scss']
})
export class ViewCurriculumComponent implements OnInit {
  year1: Array<Curriculum> = [];
  year2: Array<Curriculum> = [];
  year3: Array<Curriculum> = [];
  constructor(private http: HttpRequestsService) { }

  ngOnInit(): void {
    this.initialiseDisciplines();
  }

  initialiseDisciplines(): void {
    this.http.getDisciplinesByYear(1).subscribe(result => {
      this.year1 = result;
    });
    this.http.getDisciplinesByYear(2).subscribe(result => {
      this.year2 = result;
    });
    this.http.getDisciplinesByYear(3).subscribe(result => {
      this.year3 = result;
    });
  }

}
