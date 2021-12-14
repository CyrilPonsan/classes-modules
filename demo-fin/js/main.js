import data from './gnome-data.js';
import pics from './pics.js';
import { createGnome } from './creer-gnome.js';

createGnome(data, pics).forEach((element) => {
    console.log(element.nom + " " + element.metier);
    console.log(element.testPuissance(element.niveau));
});
