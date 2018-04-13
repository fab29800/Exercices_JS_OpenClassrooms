// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var nom = prompt("Quel est votre Nom ?");
var prenom = prompt("Quel est votre prenom ?");


console.log(direBonjour(nom, prenom));

alert(direBonjour(nom, prenom));

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat
