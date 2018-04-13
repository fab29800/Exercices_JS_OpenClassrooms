var mois = Number(prompt("Veuillez saisir le numero correspondant  à un mois (entre 1 et 12) : "));
switch (mois) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert("Ce mois comporte 31 jours");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        alert("ce mois comporte 30 jours");
        break;
    case 2:
        alert("Ce mois comporte 29 jours");
        break;
    default:
        alert("saisissez un numero entre 1 et 12 !!");
}
