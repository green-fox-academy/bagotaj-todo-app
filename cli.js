#!/usr/bin/env node

import minimist from "minimist";
import fs from "fs";

const command = minimist(process.argv);

if (Object.keys(command).length === 1) {
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
    status;

    constructor(content, status = false) {
        this.content = content;
        this.status = status;
    }

    comlete() {
        this.status = true;
    }
}

class ToDoList {
    toDoList = [];

    add(content, status) {
        let newTodo = new ToDo(content, status);

        this.toDoList.push(newTodo);
    }

    delete(todo) {
        this.toDoList.splice(todo - 1, 1);
    }

    toString() {
        return this.toDoList
            .map(
                (element, index) =>
                    `${index + 1} - [${element.status ? "x" : " "}] ${
                        element.content
                    }`
            )
            .join("\n");
    }
}

const ToDos = new ToDoList();

let toDoListFromFile = JSON.parse(todoListContent);
toDoListFromFile.forEach((element) => {
    ToDos.add(element.content, element.status);
});

if (command.l === true) {
    if (ToDos.toDoList.length === 0) {
        console.log("Nincs mára tennivalód! :)");
    }

    console.log(ToDos.toString());
}

if (typeof command.a === "string") {
    ToDos.add(command.a);
} else if (command.a === true) {
    console.log(
        "Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!"
    );
}

if (typeof command.r === "number") {
    if (ToDos.toDoList.length < command.r) {
        console.log(
            "Nem lehetséges az eltávolítás: túlindexelési probléma adódott!"
        );
    } else {
        ToDos.delete(command.r);
    }
} else if (command.r === true) {
    console.log("Nem lehetséges az eltávolítás: nem adott meg indexet!");
} else if (typeof command.r === "string") {
    console.log("Nem lehetséges az eltávolítás: a megadott index nem szám!");
}

try {
    todoListContent = JSON.stringify(ToDos.toDoList);
    fs.writeFileSync("todos.json", todoListContent);
} catch (err) {
    console.error(err);
}
