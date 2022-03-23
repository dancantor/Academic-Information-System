import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { StudentMainPageComponent } from './student/student-main-page/student-main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherMainPageComponent } from './teacher/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './staff/staff-main-page/staff-main-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'student', component: StudentMainPageComponent},
  {path: 'teacher', component: TeacherMainPageComponent},
  {path: 'staff', component: StaffMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
