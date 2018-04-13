var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 15;
    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force" + this.xp + " points d'experience";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

perso.xp = perso.xp + 5;

console.log(perso.decrire());
