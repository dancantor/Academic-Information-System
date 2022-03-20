import { studentCreationDTO } from './../Model/student.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  form: FormGroup;
  
  ngOnInit(): void {
    this.form = this.formBuilder.group( {
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUpperCase()]
      }]
    })
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  @Output()
  onSaveChanges: EventEmitter<studentCreationDTO> = new EventEmitter<studentCreationDTO>();

  saveChanges(): void {
    this.onSaveChanges.emit(this.form.value);
  }
  @Input()
  model: studentCreationDTO

  getErrorMsg(): string{
    const field = this.form.get('name');
    if (field?.hasError('required')) {
      return 'The name field is required';
    }
    if (field?.hasError('minlength')) {
      return 'The minimum length is 3';
    }
    if (field?.hasError('firstLetterUppercase')) {
      return field?.getError('firstLetterUppercase').message;
    }
    
    return ''
  }

}
