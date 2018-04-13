var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: "r",

    perimetre: function () {
        return 2 * r * Math.PI;
    },

    aire: function () {
        return Math.PI * r * r;
    }

}
console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
