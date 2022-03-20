import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.scss']
})
export class StudentComponentComponent{
  @Input()
  students: any;

  removeStudent(index: number): void{
    this.students.splice(index, 1);
  }

}
