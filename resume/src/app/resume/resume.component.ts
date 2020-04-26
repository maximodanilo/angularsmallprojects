import { Component, OnInit } from '@angular/core';
import { Resume } from './resume.model';
import { ResumeService } from './resume.service';
import { ResumeSectionService } from './resume-section/resume-section.service';
import { ResumeSection } from './resume-section/resume-section.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeService: ResumeService, private resumeSectionService: ResumeSectionService) {
    this.resumeSectionService.sectionsChanged.subscribe(
      (sections: ResumeSection[]) => {
        this.resumeService.daniloResume.$resumeSection = sections;
        this.resume = this.resumeService.daniloResume;
      }
    )
  }

  ngOnInit() {
    this.resume = this.resumeService.daniloResume;
  }

  addSection() {
    this.resumeSectionService.addSection();
  }
}
