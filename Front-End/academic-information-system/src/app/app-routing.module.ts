import { ProposeCourseComponent } from './pages/propose-course/propose-course.component';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';
import { GradesPageComponent } from './pages/grades-page/grades-page.component';
import { SignContractComponent } from './pages/sign-contract/sign-contract.component';
import { ConsultOptionalCoursesComponent } from './pages/consult-optional-courses/consult-optional-courses.component';
import { ViewCurriculumComponent } from './pages/view-curriculum/view-curriculum.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login-page/login.component';
import { StudentMainPageComponent } from './pages/student-main-page/student-main-page.component';
import { TeacherMainPageComponent } from './pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './pages/staff-main-page/staff-main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ViewAssignedCoursesComponentComponent } from './pages/view-assigned-courses-component/view-assigned-courses-component.component';
import { StudentEnrollComponent } from './pages/student-enroll/student-enroll.component';
import { TeacherGradingComponent } from './pages/teacher-grading/teacher-grading/teacher-grading.component';
import { ViewApproveOptionalCoursesComponent } from './pages/view-and-approve-optional-course/view-approve-optional-courses/view-approve-optional-courses.component';



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
  {path: 'teacher/propose-course', component: ProposeCourseComponent},
  {path: 'teacher/grading', component: TeacherGradingComponent}
  {path: 'teacher/approve-courses', component: ViewApproveOptionalCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
