export class ResumeSection {
    private id: string;
    private title: string;
    private subtitle: string;
    private description: string;
    private period: string;
    private isEditing: boolean;
    private layoutColumn: number;


    constructor($id: string, $title: string, $subtitle: string, $period: string, $description: string, $isEditing: boolean, $layoutColumn: number) {
        this.id = $id;
        this.title = $title;
        this.subtitle = $subtitle;
        this.period = $period;
        this.description = $description;
        this.isEditing = $isEditing;
        this.layoutColumn = $layoutColumn;
    }


    /**
     * Getter $isEditing
     * @return {boolean}
     */
    public get $isEditing(): boolean {
        return this.isEditing;
    }

    /**
     * Setter $isEditing
     * @param {boolean} value
     */
    public set $isEditing(value: boolean) {
        this.isEditing = value;
    }



    /**
     * Getter $id
     * @return {string}
     */
    public get $id(): string {
        return this.id;
    }

    /**
     * Setter $id
     * @param {string} value
     */
    public set $id(value: string) {
        this.id = value;
    }


    /**
     * Getter $title
     * @return {string}
     */
    public get $title(): string {
        return this.title;
    }

    /**
     * Setter $title
     * @param {string} value
     */
    public set $title(value: string) {
        this.title = value;
    }


    /**
     * Getter $subtitle
     * @return {string}
     */
    public get $subtitle(): string {
        return this.subtitle;
    }

    /**
     * Setter $subtitle
     * @param {string} value
     */
    public set $subtitle(value: string) {
        this.subtitle = value;
    }


    /**
     * Getter $description
     * @return {string}
     */
    public get $description(): string {
        return this.description;
    }

    /**
     * Setter $description
     * @param {string} value
     */
    public set $description(value: string) {
        this.description = value;
    }

    /**
     * Getter $period
     * @return {string}
     */
    public get $period(): string {
        return this.period;
    }

    /**
     * Setter $period
     * @param {string} value
     */
    public set $period(value: string) {
        this.period = value;
    }

    /**
     * Getter $layoutColumn
     * @return {number}
     */
    public get $layoutColumn(): number {
        return this.layoutColumn;
    }

    /**
     * Setter $layoutColumn
     * @param {number} value
     */
    public set $layoutColumn(value: number) {
        this.layoutColumn = value;
    }


}