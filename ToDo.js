export class ToDo {
    content;
    status;

    constructor(content, status = false) {
        this.content = content;
        this.status = status;
    }

    complete() {
        this.status = true;
    }

    toString() {
        return `[${this.status ? "x" : " "}] ${this.content}`;
    }
}
