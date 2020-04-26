import { ResumeSection } from './resume-section/resume-section.model';

export class Resume {
    private id: number;
    private name: string;
    private resumeSection: ResumeSection[];


    constructor($id: number, $name: string, $resumeSection: ResumeSection[]) {
        this.id = $id;
        this.name = $name;
        this.resumeSection = $resumeSection;
    }



    /**
     * Getter $id
     * @return {number}
     */
    public get $id(): number {
        return this.id;
    }

    /**
     * Setter $id
     * @param {number} value
     */
    public set $id(value: number) {
        this.id = value;
    }

    /**
     * Getter $name
     * @return {string}
     */
    public get $name(): string {
        return this.name;
    }

    /**
     * Setter $name
     * @param {string} value
     */
    public set $name(value: string) {
        this.name = value;
    }

    /**
     * Getter $resumeSection
     * @return {ResumeSection[]}
     */
    public get $resumeSection(): ResumeSection[] {
        return this.resumeSection;
    }

    /**
     * Setter $resumeSection
     * @param {ResumeSection[]} value
     */
    public set $resumeSection(value: ResumeSection[]) {
        this.resumeSection = value;
    }


}