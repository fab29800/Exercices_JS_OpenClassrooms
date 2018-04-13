// Renvoie le carré d'un nombre
function carre(x) { 
    var result = x * x;
    return result;
}

console.log(carre(0)); // Doit afficher 0
console.log(carre(2)); // Doit afficher 4
console.log(carre(5)); // Doit afficher 25

for (i = 0; i < 11; i++) {
    console.log(carre(i));
}
