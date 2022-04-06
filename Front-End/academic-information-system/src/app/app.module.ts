import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { StudentMainPageComponent } from './pages/student-main-page/student-main-page.component';
import { TeacherMainPageComponent } from './pages/teacher-main-page/teacher-main-page.component';
import { StaffMainPageComponent } from './pages/staff-main-page/staff-main-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    StudentMainPageComponent,
    TeacherMainPageComponent,
    StaffMainPageComponent,
    HomepageComponent,
    NavbarComponent,
    SidebarComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
