import { ResumeSection } from './resume-section.model';
import { EventEmitter } from '@angular/core';
import * as uuid from 'uuid';

export class ResumeSectionService {

    sectionsChanged = new EventEmitter<ResumeSection[]>();

    private daniloResumeSections: ResumeSection[] =
        [
            new ResumeSection(
                '1',
                "Application Developer",
                "Computer methods corporation",
                "Oct 2016(Current)",
                "Created several APIs using java, pl/sql and etc",
                false,
                1),

            new ResumeSection(
                '2',
                "Analista de sistemas",
                "Ihunter",
                "Feb 2011 May 2016",
                "Created several APIs using pl/sql, csv files and etc",
                false,
                1
            ),
            new ResumeSection(
                '3',
                "",
                "",
                "",
                "maximo.danilo@gmail.com",
                false,
                2
            )

        ]

    /**
     * Getter $daniloResumeSection
     * @return {ResumeSection[] }
     */
    public get $daniloResumeSection(): ResumeSection[] {
        return this.daniloResumeSections;
    }

    /**
     * Setter $daniloResumeSection
     * @param {ResumeSection[] } value
     */
    public set $daniloResumeSection(value: ResumeSection[]) {
        this.daniloResumeSections = value;
    }

    saveSection(id: string, resumeSectionInput: ResumeSection) {
        const section = this.daniloResumeSections.find((s) => s.$id === id);

        if (section) {
            section.$title = resumeSectionInput.$title;
            section.$subtitle = resumeSectionInput.$subtitle;
            section.$description = resumeSectionInput.$description;
            section.$period = resumeSectionInput.$period;
        }
        section.$isEditing = false;
    }

    addSection() {
        const myId = uuid.v4();
        const newSection = new ResumeSection(myId, '', '', '', '', true, 1);
        this.daniloResumeSections.push(newSection);
        this.sectionsChanged.emit(this.daniloResumeSections);
    }

    deleteSection(sec: ResumeSection) {
        this.daniloResumeSections = this.daniloResumeSections.filter((ele) => { return ele != sec; });
        this.sectionsChanged.emit(this.daniloResumeSections);
    }
}