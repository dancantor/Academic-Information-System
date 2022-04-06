import { HomepageComponent } from './Pages/homepage/homepage.component';
import { AppComponent } from './app.component';
import { StudentMainPageComponent } from './Pages/student-main-page/student-main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherMainPageComponent } from './Pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './Pages/staff-main-page/staff-main-page.component';
import { LoginComponent } from './Pages/login-page/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'student', component: StudentMainPageComponent},
  {path: 'teacher', component: TeacherMainPageComponent},
  {path: 'staff', component: StaffMainPageComponent},
  {path: 'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
