export class gnome {
    constructor  (nom, metier, niveau, photo) {
    this.nom = nom;
    this.metier = metier;
    this.niveau = niveau;
    this.photo = photo;
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