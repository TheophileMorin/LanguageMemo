/**
 * La directive "use strict" permet de changer la sémantique du langage.
 * Les changements produits ne sont pas identiques en fonction du navigateur.
 * Le mode strict consiste à définir l'expression littérale "use strict" en début de scope.
 *
 * - Permet de restreindre la création de variable globales.
 * - Permet de restreindre la suppression d'objets.
 * - De limiter la création de variables avec des noms représentant potentiellement des mots clés.
 * - D'écrire sur des propriétés read-only, get-only
 */

//"use strict"; //mode strict pour l'ensemble du fichier


/*
 Exemple 1 : Impossible de définir une variable globale.
 */
(function() {
    //"use strict"; //mode strict pour la portée de l'IIFE
    globalScopeLeak = 'impossible'; //-> ReferenceError: globalLeak2 is not defined
})();



/*
 Exemple 2 : Obligation de déclarer un objet avant initialisation
 */
(function() {
    //"use strict";
    randomObject = {randomProp : 'something'}; //-> ReferenceError: randomObject is not defined
})();



/*
 Exemple 3 : Suppression d'une variable, d'une fonction ou d'une propriété non supprimable
 */
(function() {
    //"use strict";

    var localVar = 'something';
    function localFunc(a, b) { /* */ };

    delete localVar; //-> SyntaxError: Delete of an unqualified identifier in strict mode.
    delete localFunc; //-> SyntaxError: Delete of an unqualified identifier in strict mode.
    delete Object.prototype; //-> TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
})();



/*
 Exemple 4 : Duplication du nom des paramètres d'une fonction
 */
(function() {
    //"use strict";

    function f(a, a) { /* */ } //-> SyntaxError: Duplicate parameter name not allowed in this context
})();



/*
 Exemple 5 : Certains formatage particuliers
 */
(function() {
    //"use strict";

    var octal = 010; //-> SyntaxError: Octal literals are not allowed in strict mode.
    var excapedChar = '\010'; //-> SyntaxError: Octal literals are not allowed in strict mode.
})();



/*
 Exemple 6 : Ecrire sur des propriétés read-only et get-only
 */
(function() {
    //"use strict";

    var obj1 = {},
        obj2 = {
            get f() {return 'something'}
        };

    Object.defineProperty(obj1, 'readProp', {value: 'something', writable: false});
    obj1.readProp = 'something else'; //-> TypeError: Cannot assign to read only property 'readProp' of object '#<Object>'
    obj2.f = 'something else'; //-> TypeError: Cannot set property f of #<Object> which has only a getter
})();



/*
 Exemple 7 : Restrictions sur les noms de variables
 */
(function() {
    //"use strict";

    var eval = 'something'; //-> SyntaxError: Unexpected eval or arguments in strict mode
    var arguments = 'something';

    //Es6 keywords
    var implements = 'something'; //-> SyntaxError: Unexpected strict mode reserved word
    var interface = 'something';
    var let = 'something';
    var package = 'something';
    var private = 'something';
    var protected = 'something';
    var public = 'something';
    var static = 'something';
    var yield = 'something';
})();




/*
 Exemple 8 : Restriction sur le statement with
 */
(function() {
    //"use strict";
    with(Math){ //-> SyntaxError: Strict mode code may not include a with statement
        var x = cos(2);
    }
})();




/*
 Exemple 9 : Restriction sur la création de variables via la fonction eval()
 */
(function() {
    "use strict";

    eval('var object = {x : 2}'); //-> ReferenceError: object is not defined
    console.log(object);
})();