const errorHandlingHU = {
    noCommand: `Parancssori Todo applikáció
==========================
                
Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`,
    commandA: "Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!",
    notACommand: "Nem támogatott argumentum!",
    commandR: "Nem lehetséges az eltávolítás: nem adott meg indexet!",
    commandROverIndexing:
        "Nem lehetséges az eltávolítás: túlindexelési probléma adódott!",
    commandRNotANumber:
        "Nem lehetséges az eltávolítás: a megadott index nem szám!",
    commandC: "Nem lehetséges a feladat végrehajtása: nem adott meg indexet!",
    commandCOverIndexing:
        "Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott!",
    commandCNotANumber:
        "Nem lehetséges a feladat végrehajtása: a megadott index nem szám!",
    noToDo: "Nincs mára tennivalód! :)",
};

export function errorHandling(command) {
    if (command === "noCommand") {
        console.log(errorHandlingHU.noCommand);
    }

    if (command === "notACommand") {
        console.log(errorHandlingHU.notACommand);
    }

    if (command === "commandA") {
        console.log(errorHandlingHU.commandA);
    }

    if (command === "commandROverIndexing") {
        console.log(errorHandlingHU.commandROverIndexing);
    }

    if (command === "commandR") {
        console.log(errorHandlingHU.commandR);
    }

    if (command === "commandRNotANumber") {
        console.log(errorHandlingHU.commandRNotANumber);
    }

    if (command === "commandCOverIndexing") {
        console.log(errorHandlingHU.commandCOverIndexing);
    }

    if (command === "commandC") {
        console.log(errorHandlingHU.commandC);
    }

    if (command === "commandCNotANumber") {
        console.log(errorHandlingHU.commandCNotANumber);
    }

    if (command === "noToDo") {
        console.log(errorHandlingHU.noToDo);
    }
}
