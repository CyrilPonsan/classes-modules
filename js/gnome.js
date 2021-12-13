export default class gnome {
    constructor  (nom, metier, niveau, puissance) {
    this.nom = nom;
    this.metier = metier;
    this.niveau = niveau;
    }
    testPuissance(ilevel) {
        if ( ilevel >= 249 ) {
            return("Surpuissant");
        }
        if ( ilevel >= 242 ) {
            return("Puissant");
        }
        else {
            return("Noob");
        }
    }
}