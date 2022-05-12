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
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DisplayErrorsComponent } from './shared/utilities/display-errors/display-errors.component';
import { SidebarPagesComponent } from './shared/components/sidebar-pages/sidebar-pages.component';
import { ViewCurriculumComponent } from './Pages/view-curriculum/view-curriculum.component';
import { TableCurriculumComponent } from './shared/components/table-curriculum/table-curriculum.component';
import { ConsultOptionalCoursesComponent } from './Pages/consult-optional-courses/consult-optional-courses.component';


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
    ConsultOptionalCoursesComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
