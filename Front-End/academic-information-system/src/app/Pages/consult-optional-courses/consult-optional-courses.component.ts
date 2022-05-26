import { CourseDto } from './../../Models/course-dto';
import { OptionalWithPreference } from './../../Models/optional-with-preference';
import { DisciplineWithId } from './../../Models/discipline-with-id';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from './../../shared/services/storage.service';
import { HttpRequestsService } from 'src/app/shared/services/http-requests.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Curriculum } from 'src/app/Models/curriculum';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { parseWebAPIErrors } from 'src/app/shared/utilities/utils';

@Component({
  selector: 'app-consult-optional-courses',
  templateUrl: './consult-optional-courses.component.html',
  styleUrls: ['./consult-optional-courses.component.scss']
})
export class ConsultOptionalCoursesComponent implements OnInit {
  optionalInitial: Array<DisciplineWithId> = [];
  optionalFinal: Array<DisciplineWithId> = [{
    Name: '',
    ProfessorName: '',
    NrOfCredits: 0,
    id: 0
  }];
  mandatoryDisciplines: Array<DisciplineWithId> = [];
  columnsToDisplay = ['Name', 'ProfessorName', 'NrOfCredits'];
  msg: string[] = [];
  locked: boolean = false;

  @ViewChild('final', {static: false}) final: MatTable<any>;
  @ViewChild('initial', {static: false}) initial: MatTable<any>;


  constructor(private http: HttpRequestsService, private storage: StorageService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.http.getOptionalDisciplines().subscribe(result => {
      this.http.getProfileInfoById(this.storage.getUserId() || '', this.storage.getUserType()).subscribe(
        result1 => {
          this.http.getEnrolledYears(result1.id).subscribe(years => {
            this.http.getCoursesByStudIdAndYear(parseInt(result1.id), years.year1).subscribe(courses => {
              this.optionalInitial = result;
              for (let course of courses){
                this.mandatoryDisciplines.push({
                  Name: course.name,
                  NrOfCredits: course.nrOfCredits,
                  ProfessorName: course.professorName,
                  id: 1
                })
              }
              this.http.getOptionalSortedByPriority(parseInt(result1.id)).subscribe(optionals => {
                this.optionalFinal = optionals;
                if (this.optionalFinal.length === this.optionalInitial.length) {
                  this.locked = true;
                  this.optionalInitial = [];
                }
                else{
                  var copyArray: Array<DisciplineWithId> = []
                  for (let optional of this.optionalInitial){
                    if (this.optionalFinal.find(value => value.id === optional.id) === undefined){
                      copyArray.push(optional);
                    }
                  }
                  console.log(copyArray)
                  this.optionalInitial = copyArray;
                  if (this.optionalFinal.length === 0) {
                    this.optionalFinal = [{
                      Name: '',
                      ProfessorName: '',
                      NrOfCredits: 0,
                      id: 0
                    }];
                  }
                }
              });
            })
          })
        })
    })
  }

  drop(event : CdkDragDrop<DisciplineWithId[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.optionalFinal[0].Name === ''){
        this.optionalFinal.pop();
      }
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
      this.initial.renderRows();
      this.final.renderRows();
  }

  saveOptionalList() {
    this.http.getProfileInfoById(this.storage.getUserId() || '', this.storage.getUserType()).subscribe(
      result => {
        for (var optional of this.optionalFinal) {
          let discipline: OptionalWithPreference = {
            disciplineID: optional.id,
            studID: Number(result.id),
            order:  this.optionalFinal.indexOf(optional) + 1
          }
          this.http.insertOptionalPreferedDiscipline(discipline).subscribe( () => {
            this.msg.pop();
            this.snackBar.open("Optional discipline added", 'Ok')}
          , error => this.msg = parseWebAPIErrors(error)); 
        }

      }
    )
  }

  map

}
