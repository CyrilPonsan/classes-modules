import { gnome } from './gnome.js'

export function createGnome(data) {
    let gnomes = [];
    let i = 0;
    data.forEach((element) => {
        gnomes[i] = new gnome(element.nom, element.metier, element.niveau);
        i++;
    });
    return gnomes;
}