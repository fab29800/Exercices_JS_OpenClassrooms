var jour = prompt("Veuillez saisir un jour de la semaine :");
switch (jour) {
    case "lundi":
        alert("demain nous serons mardi !");
        break;
    case "mardi":
        alert("demain nous serons mercredi !");
        break;
    case "mercredi":
        alert("demain nous serons jeudi !");
        break;
    case "jeudi":
        alert("demain nous serons vendredi !");
        break;
    case "vendreedi":
        alert("demain nous serons samedi !");
        break;
    case "samedi":
        alert("demain nous serons dimanche !");
        break;
    case "dimanche":
        alert("demain nous serons lundi !");
        break;
    default:
        alert("ce jour n'existe pas !!");
}
