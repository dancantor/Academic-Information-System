import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponentComponent } from './practice/practice-component/practice-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentComponentComponent } from './students/student-component/student-component.component';
import { HomeComponent } from './practice/home/home.component';
import { IndexStudentComponent } from './students/index-student/index-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormStudentComponent } from './students/form-student/form-student.component';
import { StudentFilterComponent } from './students/student-filter/student-filter.component'

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponentComponent,
    StudentComponentComponent,
    HomeComponent,
    IndexStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    FormStudentComponent,
    StudentFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
