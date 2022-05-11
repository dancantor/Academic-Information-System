import { Curriculum } from './../../../Models/curriculum';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-curriculum',
  templateUrl: './table-curriculum.component.html',
  styleUrls: ['./table-curriculum.component.scss']
})
export class TableCurriculumComponent implements OnInit {
  columnsToDisplay = ['Name', 'ProfessorName', 'NrOfCredits'];
  @Input() courses : Array<Curriculum> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
