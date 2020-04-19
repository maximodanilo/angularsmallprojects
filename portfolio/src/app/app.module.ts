import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ResumeListComponent } from "./resume/resume-list/resume-list.component";
import { ResumeComponent } from "./resume/resume.component";
import { ResumeDetailComponent } from "./resume/resume-detail/resume-detail.component";
import { AboutComponent } from "./resume/about/about.component";
import { HeaderComponent } from "./header/header.component";
import { SkillsComponent } from "./resume/skills/skills.component";
import { WorkExperienceComponent } from "./resume/work-experience/work-experience.component";
import { EducationComponent } from "./resume/education/education.component";
import { ContactComponent } from "./resume/contact/contact.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    ResumeListComponent,
    ResumeComponent,
    ResumeDetailComponent,
    AboutComponent,
    HeaderComponent,
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
