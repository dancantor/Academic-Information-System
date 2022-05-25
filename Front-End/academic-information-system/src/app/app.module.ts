import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StudentMainPageComponent } from './Pages/student-main-page/student-main-page.component';
import { TeacherMainPageComponent } from './Pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './Pages/staff-main-page/staff-main-page.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './Pages/login-page/login.component'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { DisplayErrorsComponent } from './shared/utilities/display-errors/display-errors.component';
import { SidebarPagesComponent } from './shared/components/sidebar-Pages/sidebar-Pages.component';
import { ViewCurriculumComponent} from './Pages/view-curriculum/view-curriculum.component';
import { TableCurriculumComponent } from './shared/components/table-curriculum/table-curriculum.component';
import { ViewAssignedCoursesComponentComponent } from './Pages/view-assigned-courses-component/view-assigned-courses-component.component';
import { CoursesTableComponent } from './Pages/view-assigned-courses-component/courses-table/courses-table/courses-table.component';
import { StudentEnrollComponent } from './Pages/student-enroll/student-enroll.component';
import { ConsultOptionalCoursesComponent } from './Pages/consult-optional-courses/consult-optional-courses.component';
import { SignContractComponent } from './Pages/sign-contract/sign-contract.component';
import { GradesPageComponent } from './Pages/grades-page/grades-page.component';
import { ViewCoursesComponent } from './Pages/view-courses/view-courses.component';
import { ProposeCourseComponent } from './Pages/propose-course/propose-course.component';


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
    ProposeCourseComponent
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
