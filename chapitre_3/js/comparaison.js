var nombre1 = prompt("Veuillez saisir un premier nombre :");
var nombre2 = prompt("Veuillez saisir un second nombre :");

if (nombre1 > nombre2) {
    alert(nombre1 + " est plus grand que " + nombre2);
} else if (nombre1 < nombre2) {
    alert(nombre1 + "est plus petit que " + nombre2);
} else {
    alert("les valeurs saisies sont identiques !")
}
