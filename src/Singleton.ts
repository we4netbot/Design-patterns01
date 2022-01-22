class School {
    name: string;
    static instance: School = null;

    constructor(_name: string) {
        this.name = _name;
    }

    static getInstance(name: string) {
        if (this.instance == null) {
            this.instance = new School(name)
        }
        return this.instance
    }

    log() {
        console.log(`Its ${this.name}`)
    }
}

export function callSchool() {
    School.getInstance('school-1').log()
    School.getInstance('school-2').log()

}