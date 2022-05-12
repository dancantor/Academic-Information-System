import { Component, OnInit } from '@angular/core';
import { CoursesTableComponent } from './courses-table/courses-table/courses-table.component';

@Component({
  selector: 'app-view-assigned-courses-component',
  templateUrl: './view-assigned-courses-component.component.html',
  styleUrls: ['./view-assigned-courses-component.component.scss']
})
export class ViewAssignedCoursesComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
