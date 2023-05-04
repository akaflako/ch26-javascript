console.log("JS07 Promesas");

/*
Una promesa (promise) es un objeto que representa la terminacion o fracaso
de una operacion asincrona.

Para crear una promesa se usa el constructor new Promise();

*/

//const pinkiPromise = new Promise( /* funcion callback */ );
const pinkiPromise = new Promise( (fncCallBackResolve, fncCallBackReject ) => {
    const menorEdad = false;

    if(menorEdad)
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject("No te conozco");
} );

// Consumir las promesas
// Usando los methods then , catch y finally

console.log("Antes de consumir la promesa" );
// pinkiPromise.then( fncCallBack )
pinkiPromise
    .then( ( response) => console.log("Promesa resuelta " + response) )
    .catch( ( error) => console.error("Tu promesa fue rechazada " + error));

console.log( "Despues de consumir la promesa" );

// ----------------- Una promesa que reciba dos números a y b y los divida
// en caso de que b sea cero, me envíe un rechazo diciéndome por que no se
// puede realizar la división.

const division = new Promise ( (fncCallBackResolve, fncCallBackReject )=> {
    const a = 10;
    const b = 5;

    if(b === 0){
        fncCallBackReject( "No se puede dividir por cero" )
    }else{
        fncCallBackResolve( a/b )
    }
});

division
    .then( (response)=> console.log("promesa resuelta, la division es: " + response))
    .catch( (error) =>console.error("Tu promesa fue rechazada: " + error ));


// -------------- Haciendo la divisón con parámetros --------------------------------

const divisionConParametros = (a, b) =>{
    const myPromise = new Promise(  (resolve, reject ) =>{
        if( b === 0 )
            reject("No se puede realizar una división por cero");
        else
            resolve(a/b);
    } );

    return myPromise;
}

divisionConParametros(3,4)
    .then( (response)=> {
        console.log(response);
        return response + 10;
    }) // 0.75
    .then( (mas10unidades)=> console.log(mas10unidades) )
    .catch( (error)=> console.log(error) )
    .finally( () => console.log("Se realizo la division") );

divisionConParametros(3,0)
    .then( (response)=> console.log(response) )
    .catch( (error)=> console.log(error) ); // No se puede realizar una división por cero

// ------------ Consumir las promesas con async y await 

console.log("---- Resolviendo divisiones -----");

const realizarDivisionSincrona = async () => {
   const resultado =await divisionConParametros(20,4);
   console.log(resultado);
   console.log(resultado + 100); // 105
   console.log("---- Terminando divisiones -----");
}

realizarDivisionSincrona();

// ---------------- Manejo de exepciones con try y catch
/*
 Sintaxis
  try{

  } catch( error ){
    
  }
*/

const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");   
    
    try {
        const resultadoErroneo = await divisionConParametros(20,0) ;
        console.log( resultadoErroneo)
        
    } catch (error) {
        console.error("Asyn-Await" + error );
    }
    
    console.log("<----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();


