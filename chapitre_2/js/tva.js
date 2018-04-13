var prixHt = prompt("Veuillez saisir un prix hors taxe :");
var tauxTva = 19.6/100;
var prixTtc  = prixHt*(1+tauxTva);
alert("le prix TTC de " + prixHt + "est de :" + prixTtc + "euros");