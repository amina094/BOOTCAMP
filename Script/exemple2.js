var film1 ={
    titre: 'Star Wars',
    annee: 2017,
    resume: 'Le premmier ordre étend ses tentacules au confins de l\'univers',
auteur: 'Rian Johnson',
Villes: ['Metz', 'Paris', 'Marseilles']

};

var film2 ={
    titre: 'Dune',
    annee: 2021,
    resume: 'Paul Atreides, un jeunne homme brillant et doué au destin plus grand que lui-meme',
auteur: 'Denis Villeneuve',
Villes: ['Strasbourg', 'Tours', 'Lenis']

};

var film3 ={
    titre: 'Avengers',
    annee: 2012,
    resume: ' Quand un ennemi inattendu fait surface pour menacer la sécurité et',
auteur: 'Joss Whedon',
Villes: ['Brest', 'Grenoble', 'Lens']

};

/*
Un tableau commence à l'indice 0
l;indice maximum sera toujours la taille du tableau -1
Ici la taille du tableau est de 3
L'indice maximum: 2
*/

var films=[];
films[0]=film1;
films[1]=film2;
films[2]=film3;

/*
var films=[films1, films2, films3];
*/
console.log(films); //affichez tout le tableau
console.table(films); //affichage sous forme de tableau
console.log(films[0]); //j;affiche un des films du tableau

/*
je veux afficher la deuxiéme ville du 3éme films enregistré dqns le tableau films
*/ 
console.log(films[2].Villes[1]);