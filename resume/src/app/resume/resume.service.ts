import { Resume } from './resume.model';
import { ResumeSection } from './resume-section/resume-section.model';
import { Injectable } from '@angular/core';
import { ResumeSectionService } from './resume-section/resume-section.service';

@Injectable({
    providedIn: 'root',
})
export class ResumeService {

    daniloResume: Resume = new Resume(
        1,
        "Danilo Maximo Almeida",
        this.sectionService.$daniloResumeSection
    );

    constructor(private sectionService: ResumeSectionService) {

    }
}