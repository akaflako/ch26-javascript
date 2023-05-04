
// ------------------ Desarrollo sincronico ------------------- //

const primerPaso = () => {
    console.log("01-Inicio de mi programa JS07");

}
const segundoPaso = () => {
    console.log("02-Desarrollo de mi programa JS07");

}
const tercerPaso = () => {
    console.log("03-Fin de mi programa JS07");

}
primerPaso();
segundoPaso();
tercerPaso();

// ---------------- Programación Asíncrona --------------------- //
// setTimeout()
// Establece un temporizador que ejecuta una funcion
// una vez que expire el temporizador

const desarolloAsincrono = ( saludo ) => {
    console.log("Hola " + saludo);
}

const segundoPasoAsincrono = (saludo ) => {
    setTimeout( ( ) => console.log("Hola" + saludo) , 4000);
}

console.log("---------------");
primerPaso();
//setTimeout(desarolloAsincrono, 3000, "ch26" );
segundoPasoAsincrono("Ch26 con 4s de retraso");
tercerPaso();

// -------------------- setInterval -----------------
// Ejecuta una funcion de manera reiterada con un tiempo de retardo fijo entre cada llamada.

const segundoPasoConIntervalo = (saludo ) => {
    setInterval( () => console.log("La banda malandra es " + saludo) , 2000 );
}

console.log("--------setInterval-------");
primerPaso();
segundoPasoConIntervalo("ch26 wu, wu");
tercerPaso();

// -------------------- Iniciar y detener setInterval -------------------------

const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;

const stateButtons = ( stopState, startState) =>{
    refStartInterval.disabled = startState;
    refStopInterval.disabled = stopState;
}

const disableStart = () => {
    stateButtons( false , true);
}
const enableStart = () => {
    stateButtons(true, false);
}

enableStart();

refStartInterval.addEventListener( "click" , ()=>{
    //console.log("Se pulsó iniciar");
    idInterval = setInterval(() => {
        refDateH2.innerHTML = new Date().toLocaleString();        
    }, 1000);
    disableStart();
});


refStopInterval.addEventListener( "click" , ()=>{
    //console.log("Se pulsó detener");
    clearInterval( idInterval ); //detener mi intervalo
    enableStart();
});
