import data from './gnome-data.js';
import { createGnome } from './creer-gnome.js';

createGnome(data).forEach((element) => {
    console.log(element.nom + " " + element.metier);
    console.log(element.testPuissance(element.niveau));
});
