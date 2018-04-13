var motSaisi = prompt("Saisissez un mot SVP ? :");
console.log("Le mot " + motSaisi + " contient " + motSaisi.length + " caractere(s)");
console.log("il s'ecrit " + motSaisi.toLowerCase() + " en minuscule");
console.log("il s'ecrit " + motSaisi.toUpperCase() + " en majuscule");


function compterNbVoyelles(motSaisi) {
    var nbVoyelles = 0;
    for (i = 0; i < motSaisi.length; i++) {
        var lettre = motSaisi[i].toLocaleLowerCase();
        if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") ||
            (lettre === "u") || (lettre === "y")) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}
var nbVoyelles = compterNbVoyelles(motSaisi);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + ((motSaisi.length) - nbVoyelles) + " consonne(s)");


function motInverse(motSaisi) {
    var motInvers = "";
    for (var i = 0; i < motSaisi.length; i++) {
        motInvers = motSaisi[i] + motInvers;
    }
    return motInvers;
}


var motInvers = motInverse(motSaisi);
console.log("Il s'ecrit " + motInverse(motSaisi) + " en verlan");
