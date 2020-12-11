export class ToDo {
    content;
    status;

    constructor(content, status = false) {
        this.content = content;
        this.status = status;
    }

    comlete() {
        this.status = true;
    }

    toString() {
        return `[${this.status ? "x" : " "}] ${this.content}`;
    }
}
