export function errorHandling(command) {
    if (command === "noCommand") {
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

    if (command === "notACommand") {
        console.log("Nem támogatott argumentum!");
    }

    if (command === "commandA") {
        console.log(
            "Nem lehetséges új feladat hozzáadása: nincs megadva a feladat!"
        );
    }

    if (command === "commandROverIndexing") {
        console.log(
            "Nem lehetséges az eltávolítás: túlindexelési probléma adódott!"
        );
    }

    if (command === "commandR") {
        console.log("Nem lehetséges az eltávolítás: nem adott meg indexet!");
    }

    if (command === "commandRNotANumber") {
        console.log(
            "Nem lehetséges az eltávolítás: a megadott index nem szám!"
        );
    }

    if (command === "commandCOverIndexing") {
        console.log(
            "Nem lehetséges a feladat végrehajtása: túlindexelési probléma adódott!"
        );
    }

    if (command === "commandC") {
        console.log(
            "Nem lehetséges a feladat végrehajtása: nem adott meg indexet!"
        );
    }

    if (command === "commandCNotANumber") {
        console.log(
            "Nem lehetséges a feladat végrehajtása: a megadott index nem szám!"
        );
    }
}
