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

const temperatura = 100;
let mensaje;

/*     if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
    else mensaje = `${temperatura} grados no es ideal`; */
if (temperatura === 21)
    mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura < 21 && temperatura < 40)
    mensaje = `Tempratura de ${temperatura} grados es fría`;
else if (temperatura > 40)
    mensaje = `Tempratura de ${temperatura} grados es super caliente`;
else if (temperatura > 21)
    mensaje = `Tempratura de ${temperatura} grados es caliente`;
else
    mensaje = `Temperatura de ${temperatura} grados no existe`;
console.log(mensaje);

/* -------Ejercicio------- */
// preguntar numero de mes del uno a doce, de acuerdo al numero de mes
//desplegar en un Alert (o en el DOM ) La estación del año

// mes 12,1,2 = invierno 
// mes 3,4,5= primavera
// mes 6,7,8 = Verano
//mes 9,10,11 = otoño
// Usar if-else

const getEstacion = (mes) => {
    let estacion;
  
    if (mes === 12 || mes === 1 || mes === 2) {
      estacion = "invierno";
    } else if (mes === 3 || mes === 4 || mes === 5) {
      estacion = "primavera";
    } else if (mes === 6 || mes === 7 || mes === 8) {
      estacion = "verano";
    } else if (mes === 9 || mes === 10 || mes === 11) {
      estacion = "otoño";
    } else {
      estacion = "El número ingresado no es válido.";
    }
  
    return estacion;
  }
  
  const boton = document.getElementById("calcular");
  boton.addEventListener("click", () => {
    const mesInput = document.getElementById("mes");
    const mes = parseInt(mesInput.value);
  
    const estacion = getEstacion(mes);
    const resultado = document.getElementById("resultado");
    resultado.textContent = `La estacion del mes ${mes}, es ${estacion}.`;
  });

/* ----------Switch------------ 
La instrucción switch evalua una expresion y se compara con el valor de cada 
instancia en "case" hasta que se encuentra la sentencia break.

  switch(expresion){
    case valor1:
        sentencia;
        break;
    case valor2:
        sentencia;
        break;
    case valorN:
        sentencia;
        break;
    default:
        sentencias;
  }
*/

const setVelocidadVentilador= (velocidad)=>{ 
    
    let msj;
    switch (velocidad){
    case 0:
        msj = "apagado";
        break;
    case 1:
        msj = "Velocidad Baja";
        break;
    case 2:
        msj = "Velocidad Media";
        break;
    case 3:
        msj = "Velocidad Alta";
        break;
    case 4:
    case 5:
        msj = "Velocidad muy alta";
        break;
    default:
        msj = "Este nivel no existe";
        break;
} 
return msj;
}
console.log(`Velocidad de ventilador: ${setVelocidadVentilador(4)}.`);

// ------------- Operador condicional terniario --------------
/*
Es el unico operados de JavaScript que tiene 3 operandos. Generalmente se usa
como opcion a la sentencia if-else.

Sintaxis:

condicion ? expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa;
*/

const subtotal = 1_000
const pagoTarjetaCredito = true;
/* let msj;
if(pagoTarjetaCredito) msj = subtotal*1.025;
else msj = subtotal* 1; */

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal*1 } pesos`);

//

/* const edad = 17;
// Se permite el acceso al antro de mala muerte?
console.log(`Acceso ${ edad >= 18? "Permitido" : "Denegado" }`);
// A los de 17 solo con permiso
console.log(`Acceso ${ edad >= 18? "Permitido" : edad === 17? "Solo con permiso de padres."}`); */

// --------- Refactorizar --------------

/* function saludo(numero) {
    if (numero > 1) {
      saludo(numero - 1);
    }
    console.log("Saludo " + numero);
  }
  
  saludo(10); */

  const saludar = (numero) => {
    numero === 1 ? console.log("Saludo " + numero) : (saludar(numero - 1), console.log("Saludo " + numero));
  };
  
saludar(10);

