import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponentComponent } from './practice/practice-component/practice-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentComponentComponent } from './practice/student-component/student-component.component';
import { RatingComponent } from './utilities/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticeComponentComponent,
    StudentComponentComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
