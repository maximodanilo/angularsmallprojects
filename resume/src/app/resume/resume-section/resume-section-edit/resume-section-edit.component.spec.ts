import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSectionEditComponent } from './resume-section-edit.component';

describe('ResumeSectionEditComponent', () => {
  let component: ResumeSectionEditComponent;
  let fixture: ComponentFixture<ResumeSectionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSectionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
