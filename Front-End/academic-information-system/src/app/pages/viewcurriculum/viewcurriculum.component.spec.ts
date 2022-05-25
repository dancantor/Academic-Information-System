import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcurriculumComponent } from './viewcurriculum.component';

describe('ViewcurriculumComponent', () => {
  let component: ViewcurriculumComponent;
  let fixture: ComponentFixture<ViewcurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
