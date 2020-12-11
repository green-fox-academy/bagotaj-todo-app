#!/usr/bin/env node

import minimist from "minimist";
import fs from "fs";

import { ToDoList } from "./ToDoList.js";

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
    console.log(
        "Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!"
    );
}

if (typeof command.r === "number") {
    if (ToDos.getToDoList().length < command.r) {
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

if (typeof command.c === "number") {
    ToDos.getToDoList()[command.c - 1].comlete();
}

try {
    todoListContent = JSON.stringify(ToDos.getToDoList());
    fs.writeFileSync("todos.json", todoListContent);
} catch (err) {
    console.error(err);
}
