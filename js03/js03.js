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
console.log(`Marco Cohorte: ${numCohorteMarco}.`);
console.log(`Luis Cohorte: ${numCohorteLuis}.`);