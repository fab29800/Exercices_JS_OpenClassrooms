var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};

// Constructeur MonObjet
function MonObjet() {
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();


console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"

stylo.couleur = "rouge";
console.log("le nouveau stylo ecrit en " + stylo.couleur);

stylo.type = "plume";
console.log("le noveau stylo est un stylo " + stylo.type + " de couleur " + stylo.couleur);

stylo.prix = "2.5";
console.log("le noveau stylo est un stylo " + stylo.type + " de couleur " + stylo.couleur + "au prix de : " + stylo.prix + " € ");
