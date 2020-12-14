import { ToDo } from "./ToDo.js";

export class ToDoList {
    toDoList = [];

    getToDoList() {
        return this.toDoList;
    }

    getLength() {
        return this.toDoList.length;
    }

    add(content, status) {
        let newTodo = new ToDo(content, status);

        this.toDoList.push(newTodo);
    }

    delete(todo) {
        this.toDoList.splice(todo - 1, 1);
    }

    complete(elementNumber) {
        this.toDoList[elementNumber - 1].complete();
    }

    toString() {
        return this.toDoList
            .map((element, index) => `${index + 1} - ${element.toString()}`)
            .join("\n");
    }
}
