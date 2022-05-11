import { StudentMainPageComponent } from './pages/student-main-page/student-main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherMainPageComponent } from './pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './pages/staff-main-page/staff-main-page.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ViewcurriculumComponent } from './pages/viewcurriculum/viewcurriculum.component';
import { ViewAssignedCoursesComponentComponent } from './pages/view-assigned-courses-component/view-assigned-courses-component.component';
import { ViewCurriculumComponent } from './pages/view-curriculum/view-curriculum.component';
import { StudentEnrollComponent } from './pages/student-enroll/student-enroll.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student', component: StudentMainPageComponent},
  {path: 'teacher', component: TeacherMainPageComponent},
  {path: 'staff', component: StaffMainPageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'student/curriculum', component: ViewCurriculumComponent},
  {path: 'student/assigned-optional-courses', component: ViewAssignedCoursesComponentComponent},
  {path: 'student/enroll', component: StudentEnrollComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
