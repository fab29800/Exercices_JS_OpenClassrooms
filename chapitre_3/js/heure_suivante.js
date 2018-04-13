var heures = Number(prompt("Saisir une heure (entre 1 et 24 !!)"));
var minutes = Number(prompt("Saisir les minutes (entre 1 et 60 !!)"));
var secondes = Number(prompt("Saisir les secondes (entre 1 et 60 !!)"));

// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log("Dans une seconde, il sera " + heures + " heures, " +
        minutes + " minutes et " + secondes + " secondes");
} else {
    console.log("Heure incorrecte !");
}
