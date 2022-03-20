import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.studentsList = [{
      name: 'Popescu Ion',
      studyYear: 3,
      mean: 9.30
    },
    {
      name: 'Cantor Dan',
      studyYear: 2,
      mean: 9.80
    },
    {
      name: 'Rusu Raluca',
      studyYear: 1,
      mean: 9.13
    }
    ]
  }
  
  studentsList: any;
  title = 'academic-information-system';

}
