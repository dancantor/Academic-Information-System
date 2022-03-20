import { StudentFilterComponent } from './students/student-filter/student-filter.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { IndexStudentComponent } from './students/index-student/index-student.component';
import { HomeComponent } from './practice/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: IndexStudentComponent},
  {path: 'student/add', component: AddStudentComponent},
  {path: 'student/edit/:id', component: EditStudentComponent},
  {path: 'student/filter', component:StudentFilterComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
