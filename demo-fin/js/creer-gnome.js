import { gnome } from './gnome.js'

export function createGnome(data, pics) {
    let gnomes = [];
    let i = 0;
    data.forEach((element) => {
        gnomes[i] = new gnome(element.nom, element.metier, element.niveau, pics.photos[i]);
        displayGnome(gnomes[i].photo);
        i++;
    });
    return gnomes;
}

function displayGnome(pic) {
    const avatar = document.createElement('img');
    avatar.src = pic;
    document.querySelector('body').appendChild(avatar);
}