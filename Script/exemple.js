console.log('Afficher depuis le script');
/*
camelCase:
var maNouvelleVariable
Autres langes avec "":
var ma_nouvelle_variable
*/
var prenom=prompt('Votre prenom SVP');
console.log(prenom);
alert(prenom);
/*Exemple1*/;
var nom=prompt('Votre nom SVP');
var prenom=prompt('votre prenom');
/*pour etre sure que dans annee il y a un chiffre on peut rajouter un + devant le prompt*/
var annee=+prompt('Votre année de naissance');

/*
  POUR ALLER PLUS LOIN EN JS
  il existe une gestion des dates avec l'objet Date pour recuper l'année courante:
  var year=new  Date().getFullyear();
  */
 var year= new Date().getFullYear();
 var age= year-annee;
 console.log('Bonjour ' + nom  + ' '  +prenom + ' tu as ' + age + 'ans cette année!');