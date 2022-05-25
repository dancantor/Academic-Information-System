import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StudentMainPageComponent } from './pages/student-main-page/student-main-page.component';
import { TeacherMainPageComponent } from './pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './pages/staff-main-page/staff-main-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './pages/login-page/login.component'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DisplayErrorsComponent } from './shared/utilities/display-errors/display-errors.component';
import { SidebarPagesComponent } from './shared/components/sidebar-Pages/sidebar-Pages.component';
import { ViewCurriculumComponent} from './pages/view-curriculum/view-curriculum.component';
import { TableCurriculumComponent } from './shared/components/table-curriculum/table-curriculum.component';
import { ViewAssignedCoursesComponentComponent } from './pages/view-assigned-courses-component/view-assigned-courses-component.component';
import { CoursesTableComponent } from './pages/view-assigned-courses-component/courses-table/courses-table/courses-table.component';
import { StudentEnrollComponent } from './pages/student-enroll/student-enroll.component';
import { ConsultOptionalCoursesComponent } from './pages/consult-optional-courses/consult-optional-courses.component';
import { SignContractComponent } from './pages/sign-contract/sign-contract.component';
import { GradesPageComponent } from './pages/grades-page/grades-page.component';
import { ViewCoursesComponent } from './pages/view-courses/view-courses.component';
import { ProposeCourseComponent } from './pages/propose-course/propose-course.component';
import { TeacherGradingComponent } from './pages/teacher-grading/teacher-grading/teacher-grading.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentMainPageComponent,
    TeacherMainPageComponent,
    StaffMainPageComponent,
    HomepageComponent,
    NavbarComponent,
    LoginComponent,
    SidebarComponent,
    ProfilePageComponent,
    DisplayErrorsComponent,
    SidebarPagesComponent,
    ViewCurriculumComponent,
    TableCurriculumComponent,
    ViewAssignedCoursesComponentComponent,
    CoursesTableComponent,
    StudentEnrollComponent,
    ConsultOptionalCoursesComponent,
    SignContractComponent,
    GradesPageComponent,
    ViewCoursesComponent,
    ProposeCourseComponent,
    TeacherGradingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
