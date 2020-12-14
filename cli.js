#!/usr/bin/env node

import minimist from "minimist";
import fs from "fs";

import { ToDoList } from "./ToDoList.js";
import { errorHandling } from "./errorhandling.js";

const command = minimist(process.argv);

if (command._.length === 2 && Object.keys(command).length === 1) {
    errorHandling("noCommand");
} else if (
    command._.length > 2 ||
    !Object.keys(command).every((element) =>
        ["_", "l", "a", "r", "c"].includes(element)
    )
) {
    errorHandling("notACommand");
    console.log();
    errorHandling("noCommand");
}

let todoListContent;
try {
    todoListContent = fs.readFileSync("todos.json");
} catch (err) {
    console.error(err);
}

const ToDos = new ToDoList();

let toDoListFromFile = JSON.parse(todoListContent);
toDoListFromFile.forEach((element) => {
    ToDos.add(element.content, element.status);
});

if (command.l === true) {
    if (ToDos.getToDoList().length === 0) {
        console.log("Nincs mára tennivalód! :)");
    }

    console.log(ToDos.toString());
}

if (typeof command.a === "string") {
    ToDos.add(command.a);
} else if (command.a === true) {
    errorHandling("commandA");
}

if (typeof command.r === "number") {
    if (ToDos.getToDoList().length < command.r) {
        errorHandling("commandROverIndexing");
    } else {
        ToDos.delete(command.r);
    }
} else if (command.r === true) {
    errorHandling("commandR");
} else if (typeof command.r === "string") {
    errorHandling("commandRNotANumber");
}

if (typeof command.c === "number") {
    if (ToDos.getToDoList().length < command.c) {
        errorHandling("commandCOverIndexing");
    } else {
        ToDos.getToDoList()[command.c - 1].comlete();
    }
} else if (command.c === true) {
    errorHandling("commandC");
} else if (typeof command.c === "string") {
    errorHandling("commandCNotANumber");
}

try {
    todoListContent = JSON.stringify(ToDos.getToDoList());
    fs.writeFileSync("todos.json", todoListContent);
} catch (err) {
    console.error(err);
}
