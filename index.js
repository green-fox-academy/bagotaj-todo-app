import minimist from "minimist";
import fs from "fs";

let todoListContent;
try {
    todoListContent = fs.readFileSync("todos.json");
} catch (err) {
    console.error(err);
}

console.log(JSON.parse(todoListContent));

class ToDo {
    id;
    content;
    status;
}

class ToDoList {
    toDoList = [];

    add() {
        this.toDoList = JSON.parse(todoListContent);
    }
}

const command = minimist(process.argv);

const ToDos = new ToDoList();

console.log(ToDos);

// if (command.t === true) {
//     console.log(
//         `Parancssori Todo applikáció
// =============================

// Parancssori argumentumok:
//     -l   Kilistázza a feladatokat
//     -a   Új feladatot ad hozzá
//     -r   Eltávolít egy feladatot
//     -c   Teljesít egy feladatot`
//     );
// }
