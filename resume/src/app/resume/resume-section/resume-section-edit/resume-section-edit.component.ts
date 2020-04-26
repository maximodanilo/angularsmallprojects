import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ResumeSection } from '../resume-section.model';
import { ResumeSectionService } from '../resume-section.service';

@Component({
  selector: 'app-resume-section-edit',
  templateUrl: './resume-section-edit.component.html',
  styleUrls: ['./resume-section-edit.component.css']
})
export class ResumeSectionEditComponent implements OnInit {
  @Input() section: ResumeSection;
  @ViewChild('titleInput', { static: false }) titleInput: ElementRef;
  @ViewChild('subtitleInput', { static: false }) subtitleInput: ElementRef;
  @ViewChild('descriptionInput', { static: false }) descriptionInput: ElementRef;
  @ViewChild('periodInput', { static: false }) periodInput: ElementRef;

  constructor(private resumeSectionService: ResumeSectionService) { }

  ngOnInit() {
  }

  onClear() {
    this.section.$title = "";
    this.section.$subtitle = "";
    this.section.$description = "";
    this.section.$period = "";
  }

  onSave() {
    this.section.$title = this.titleInput.nativeElement.value;
    this.section.$subtitle = this.subtitleInput.nativeElement.value;
    this.section.$period = this.periodInput.nativeElement.value
    this.section.$description = this.descriptionInput.nativeElement.value;
    this.resumeSectionService.saveSection(this.section.$id, this.section);
  }

}
