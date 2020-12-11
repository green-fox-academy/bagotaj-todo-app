import { ToDo } from "./ToDo.js";

export class ToDoList {
    toDoList = [];

    getToDoList() {
        return this.toDoList;
    }

    add(content, status) {
        let newTodo = new ToDo(content, status);

        this.toDoList.push(newTodo);
    }

    delete(todo) {
        this.toDoList.splice(todo - 1, 1);
    }

    toString() {
        return this.toDoList
            .map((element, index) => `${index + 1} - ${element.toString()}`)
            .join("\n");
    }
}
