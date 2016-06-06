"use strict";

/**
 * On peut déclarer des variables via les mots clés :
 * - 'var' : variable
 * - 'let' : variable dont la portée est celle du bloc (ES6)
 * - 'const' : variable constante (ES6)
 * - sans mot clé : portée globale mais conflit avec "use strict"
 *
 * Phénomène de Hoisting valable uniquement pour les variables déclarées avec 'var'
 *
 * La portée des variables se définit avec les fonctions.
 * - Une variable déclarée est accessible à toutes les protées enfant
 * - const est équivalent a var en terme de portée mais la valeur est read-only
 * - let (ES6) permet de restreindre la portée aux blocs {} ("if" par exemple)
 * - Une variable locale a un contexte n'est pas accessible depuis le contexte parent
 */

var globalVar = 8;

(function() {

    console.log('globalVar dans une portée enfant : ' + globalVar );

    console.log('a avant la déclaration (var a): ' + a); //-> undefined  - cf. Hoisting
    //console.log(b); //-> ReferenceError
    //console.log(c); //-> ReferenceError

    var a = 2;
    const b = 'CONST';
    let c = 'very local';
    var undef;

    //b = 5; //-> TypeError: Assignment to constant variable.

    if(undef === undefined) {
        //true
    }
    if(!undef) {
        //true
        var innerVar = 'yes';
        let innerLet = 'yes';

        console.log('innerVar dans le bloc : ' + innerVar);
        console.log('innerLet dans le bloc : ' + innerLet);
    }
    console.log('innerVar hors du bloc : ' + innerVar);
    //console.log('innerLet hors du bloc : ' + innerLet); //-> ReferenceError

    f1(); //OK
    function f1() {
        console.log('appel a la fonction f1');
    }

    //f2(); //-> TypeError: f2 is not a function
    var f2 = function() {
        console.log('appel a la fonction f2');
        var f2a = 'F2A';
        let f2b = 'F2B';

        console.log('appel a la variable (var a) dans une sous fonction: ' + a);
        console.log('appel a la variable (let c) dans une sous fonction: ' + c);
        //console.log('appel a la variable innerLet dans une sous fonction: ' + innerLet);//-> ReferenceError:
    };
    f2(); //OK
    //console.log('appel a la variable f2a hors du contexte de f2 : ' + f2a); //-> ReferenceError:
    //console.log('appel a la variable f2b hors du contexte de f2 : ' + f2b); //-> ReferenceError:

})();

//console.log(a); //-> ReferenceError