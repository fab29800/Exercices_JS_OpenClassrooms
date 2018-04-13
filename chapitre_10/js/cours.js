function clic() {
    console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// Suppression du gestionnaire pour l'événement click
//boutonElt.removeEventListener("click", clic);
// Gestion de l'appui sur une touche du clavier produisant un caractère
//document.addEventListener("keypress", function (e) {
//    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
//});

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
        case 0: // 0 est le code du bouton gauche
            bouton = "gauche";
            break;
        case 1: // 1 est le code du bouton du milieu
            bouton = "milieu";
            break;
        case 2: // 2 est le code du bouton droit
            bouton = "droit";
            break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {
    console.log("Evènement souris : " + e.type + ", bouton " +
        getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);
// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// Gestion du clic sur le document
document.addEventListener("click", function () {
    console.log("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
    console.log("Gestionnaire paragraphe");
});
// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    console.log("Gestionnaire bouton");
});
