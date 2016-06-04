/**
 * JS design pattern. crée une portée lexicale ('lexical scope') via une fonction.
 *
 *
 */

//syntaxe
(function () { /* body */ })();
(function () { /* body */ }());  // Douglas Crockford's style

(function() {
    //"use strict";
    globalLeak1 = 'something1'; //-> Erreur silentieuse
})();

console.log(globalLeak1);


(function() {
    "use strict";
    //globalLeak2 = 'something2'; //-> ReferenceError: globalLeak2 is not defined
})();
