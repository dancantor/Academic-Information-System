import { studentCreationDTO } from './../Model/student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: studentCreationDTO = {name: "Ana"};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id)
    })
  }

  saveChanges(studentCreationDTO: studentCreationDTO) {

  }

}
