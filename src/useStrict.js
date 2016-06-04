//"use strict"; //-> Activation du "use strict" pour l'ensemble du fichier.

function useStrictFunction() {
    //"use strict"; //-> Activation du "use strict" pour le scope de la fonction.
    globalScopeLeak = "possible";
}
console.log(globalScopeLeak);


(function() {
    "use strict";
    globalScopeLeak2 = 'something'; //-> ReferenceError: globalLeak2 is not defined
})();