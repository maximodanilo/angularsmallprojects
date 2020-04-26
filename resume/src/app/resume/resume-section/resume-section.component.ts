import { Component, OnInit, Input } from '@angular/core';
import { ResumeSection } from './resume-section.model';
import { ResumeSectionService } from './resume-section.service';

@Component({
  selector: 'app-resume-section',
  templateUrl: './resume-section.component.html',
  styleUrls: ['./resume-section.component.css']
})
export class ResumeSectionComponent implements OnInit {

  @Input() section: ResumeSection;

  constructor(private resumeSectionService: ResumeSectionService) {
  }

  ngOnInit() { }

  editSection() {
    this.section.$isEditing = true;
  }

  deleteSection() {
    console.log("Delete section clicked");
    this.resumeSectionService.deleteSection(this.section);
  }

}
