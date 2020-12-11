#!/usr/bin/env node

import minimist from "minimist";
import fs from "fs";

const command = minimist(process.argv);

if (Object.keys(command).length == 1) {
    console.log(
        `Parancssori Todo applikáció
==========================
        
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`
    );
}

let todoListContent;
try {
    todoListContent = fs.readFileSync("todos.json");
} catch (err) {
    console.error(err);
}

class ToDo {
    content;
    status = false;

    constructor(content) {
        this.content = content;
    }
}

class ToDoList {
    toDoList = [];

    add(todo) {
        let newTodo = new ToDo(todo);

        this.toDoList.push(newTodo);
    }
}

const ToDos = new ToDoList();

ToDos.toDoList = JSON.parse(todoListContent);

if (command.l === true) {
    ToDos.toDoList.map((element, index) =>
        console.log(index + 1 + " - " + element.content)
    );
} else if (typeof command.a == "string") {
    ToDos.add(command.a);
}

try {
    todoListContent = JSON.stringify(ToDos.toDoList);
    fs.writeFileSync("todos.json", todoListContent);
} catch (err) {
    console.error(err);
}
