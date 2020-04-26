import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeSectionEditComponent } from './resume/resume-section/resume-section-edit/resume-section-edit.component';
import { ResumeSectionComponent } from './resume/resume-section/resume-section.component';
import { ResumeSectionService } from './resume/resume-section/resume-section.service';
import { ResumeComponent } from './resume/resume.component';
import { ResumeService } from './resume/resume.service';


@NgModule({
  declarations: [
    AppComponent,
    ResumeSectionComponent,
    ResumeComponent,
    ResumeSectionEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ResumeSectionService, ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
