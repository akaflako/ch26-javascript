console.log("JS07 Promesas");

/*
Una promesa (promise) es un objeto que representa la terminacion o fracaso
de una operacion asincrona.

Para crear una promesa se usa el constructor new Promise();

*/

//const pinkiPromise = new Promise( /* funcion callback */ );
const pinkiPromise = new Promise( (fncCallBackResolve, fncCallBackReject ) => {
    const menorEdad = true;

    if(menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject("No te conozco");
} );
