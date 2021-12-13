import gnome from './gnome.js';
import { recupData } from './gnome-data.js';
import { createGnome } from './creer-gnome.js';

let data = recupData('./php/gnome.php');

/*
let firiz = new gnome ("Firizgoude", 'shadopriest', '249');
let first = new gnome ("Firstunprouf", "voleur", "200");
let babou = new gnome ("Baboulinet", "warlock", "244");

console.log(firiz.nom + " " + firiz.testPuissance(firiz.niveau));

console.log(first.nom + " " + first.testPuissance(first.niveau));

console.log(babou.nom + " " + babou.testPuissance(babou.niveau));

*/