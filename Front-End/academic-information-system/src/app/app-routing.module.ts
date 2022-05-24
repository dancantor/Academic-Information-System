import { ViewCoursesComponent } from './Pages/view-courses/view-courses.component';
import { GradesPageComponent } from './Pages/grades-page/grades-page.component';
import { SignContractComponent } from './Pages/sign-contract/sign-contract.component';
import { ConsultOptionalCoursesComponent } from './Pages/consult-optional-courses/consult-optional-courses.component';
import { ViewCurriculumComponent } from './Pages/view-curriculum/view-curriculum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login-page/login.component';
import { StudentMainPageComponent } from './Pages/student-main-page/student-main-page.component';
import { TeacherMainPageComponent } from './Pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './Pages/staff-main-page/staff-main-page.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { ViewAssignedCoursesComponentComponent } from './Pages/view-assigned-courses-component/view-assigned-courses-component.component';
import { StudentEnrollComponent } from './Pages/student-enroll/student-enroll.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student', component: StudentMainPageComponent},
  {path: 'teacher', component: TeacherMainPageComponent},
  {path: 'staff', component: StaffMainPageComponent},
  {path: 'login',component:LoginComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'student/curriculum', component: ViewCurriculumComponent},
  {path: 'student/assigned-optional-courses', component: ViewAssignedCoursesComponentComponent},
  {path: 'student/enroll', component: StudentEnrollComponent},
  {path: 'student/optional-courses', component: ConsultOptionalCoursesComponent},
  {path: 'student/sign-contract', component: SignContractComponent},
  {path: 'student/view-grades', component: GradesPageComponent},
  {path: 'student/view-courses', component: ViewCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
