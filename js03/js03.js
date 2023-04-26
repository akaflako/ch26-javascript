console.log("Sesion JS03");

// ----------------- Declaracion de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    dolo tendran alcance(scope) dentro del bloque
    o bloques anidados.

    */
   let nombre = "Marco";
   const apellido = "Martinez";
   let edadMarco = 22, edadLuis = 25;
   // let edadMarco = 39;
   // let edadLuis = 25;
   let numCohorteMarco = numCohorteLuis = 26;

   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una variable global o de bloque superior, la variable
     local oculta las otras variables, para que la variable
     local sea usada
    */
   let nombre = "Luis";
   const apellido = "SP";
   console.log(`Me llamo ${nombre} ${apellido}`);
   console.log(`Edad Marco ${edadMarco} años.`);
   console.log(`Edad Luis ${edadLuis} años.`);
   console.log(`Marco Cohorte: ${numCohorteMarco}.`);
   console.log(`Luis Cohorte: ${numCohorteLuis}.`);
}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Edad Marco ${edadMarco} años.`); // 22
console.log(`Edad Luis ${edadLuis} años.`); // 25
console.log(`Marco Cohorte: ${numCohorteMarco}.`); // 26
console.log(`Luis Cohorte: ${numCohorteLuis}.`); // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); // Las variables no estan definidas
//console.log(`Edad Marco ${edadMarco} años.`); // Las variables no estan definidas
//console.log(`Edad Luis ${edadLuis} años.`); // Las variables no estan definidas
//console.log(`Marco Cohorte: ${numCohorteMarco}.`);
//console.log(`Luis Cohorte: ${numCohorteLuis}.`);

//------------------- Condicional If-Else ------------------------//
/*
La condicional if ejecuta una sentencia si una condicion especificada es evaluada
como verdadera.

sintaxis:
    if(condicion) sentencia;

    if(condicion) {
        sentencias;
    }
    
    if(condicion) sentencia;
    else sentencia;
    
    if(condicion) {
      sentencia;
    } else {
        sentencia;
    }
    
    if(condicion) {
      sentencia;
    } else if ( condicion 2) {
        sentencia;
    } else if ( condicion 3) {
        sentencia;
    } else if ( condicion n) {
        sentencia;
    } else {
        sentencia;
    }
        
*/

const temperatura = 100; // true = 1 (frio), false = 0 (frio)
let mensaje;

//if (temperatura === 21) mensaje = `Temperatura ideal: ${temperatura}`;
//else mensaje = `${temperatura} grados no es ideal.`

if (temperatura === 21) // comparacion estricta, no convierte el "21" a number, por lo tanto no existe
    mensaje = `Temperatura ideal: ${temperatura}`;
else if ( temperatura > 21) {
    mensaje = `Temperatura de ${temperatura} grados es caliente`;
}
else if( temperatura < 21) {
    mensaje = `Temperatura de ${temperatura} grados es fria`;
}
else {
    mensaje = `Temperatura de ${temperatura} grados no existe`;
}

console.log(mensaje);