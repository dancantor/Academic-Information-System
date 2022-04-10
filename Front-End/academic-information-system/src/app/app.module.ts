import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StudentMainPageComponent } from './Pages/student-main-page/student-main-page.component';
import { TeacherMainPageComponent } from './Pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './Pages/staff-main-page/staff-main-page.component';
import { HomepageComponent } from './Pages/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './Pages/login-page/login.component'
import {MatIconModule} from '@angular/material/icon'
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProfilePageComponent } from './Pages/profile-page/profile-page.component';
import { DisplayErrorsComponent } from './shared/utilities/display-errors/display-errors.component';

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
    DisplayErrorsComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
