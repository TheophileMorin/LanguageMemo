/**
 * Hoisting (hisser en français). C'est le principe de remonter les déclarations de variables
 * en haut de la portée à laquelle elles appartiennent.
 * C'est le comportement par défaut des interpreteurs JS.
 */

/*
 Exemple 1 : Déclarations
 */

(function() {
    localVar = 'something'; //not a global leak

    localVar += ' local';
    console.log(localVar); //ouput-> 'something local'

    var localVar;
})();
//console.log(localVar); //-> ReferenceError: localVar is not defined

//Produit exactement le même résultat que l'IIFE précédente.
(function() {
    var localVar;
    localVar = 'something';

    localVar += ' local';
    console.log(localVar); //ouput-> 'something local'
})();



/**
 * A savoir que seule les déclarations sont remontées, cela ne concerne pas les initialisations.
 */
/*
 Exemple 2 : Déclarations
 */

(function() {
    localVar += ' local';
    console.log(localVar); //ouput-> 'undefined local'

    var localVar  = 'something';
})();

//Produit exactement le même résultat que l'IIFE précédente.
(function() {
    var localVar; //undefined
    localVar += ' local';
    console.log(localVar); //ouput-> 'undefined local'

    localVar  = 'something';
})();