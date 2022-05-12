import { ConsultOptionalCoursesComponent } from './Pages/consult-optional-courses/consult-optional-courses.component';
import { ViewCurriculumComponent } from './Pages/view-curriculum/view-curriculum.component';
import { StudentMainPageComponent } from './pages/student-main-page/student-main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherMainPageComponent } from './pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './pages/staff-main-page/staff-main-page.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student', component: StudentMainPageComponent},
  {path: 'teacher', component: TeacherMainPageComponent},
  {path: 'staff', component: StaffMainPageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'student/curriculum', component: ViewCurriculumComponent},
  {path: 'student/optional-courses', component: ConsultOptionalCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
