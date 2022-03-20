import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.scss']
})
export class StudentFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  students = [
    {name: 'Popescu Ion', group: '912', mean: 9.3},
    {name: 'Cantor Dan', group: '913', mean:9.8},
    {name: 'Rusu Raluca', group: '913', mean: 9.13}
  ]
  originalStudents = this.students;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      group: 0,
      erasmus: false,
      mean: 0
    })

    this.form.valueChanges
      .subscribe(values => {
        this.students = this.originalStudents;
        this.filterStudents(values);
      })
  }

  filterStudents(values: any) {
    if(values.name){
      this.students = this.students.filter(student => student.name.toLowerCase().indexOf(values.name.toLowerCase()) !== -1)
    }
  }

  clearForm() {
    this.form.reset();
  }

}
