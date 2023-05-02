console.log("Sesion JS05 Operadores");

//-------------- Operadores aritmeticos ----------------------
// Adicion +
// Multiplicacion *
// Substraccion -
// Division /
// Exponencial **
// Resto % 

// Ejemplo
let dinero = 20 + 10; // 30

//-------- Operadores de asignacion --------------
// Asigna un valor a su operando izquierdo basandose en el valor de
// su operando derecho
// Asignacion =
// Asignacion de adicion +=
dinero += 15; // dinero = dinero + 15;
// Multiplicacion *=
// Substraccion -=
// Division /=
// Exponencial **=
// Resto %=
12 + 7 + 12 + 4 + 1;

2 ** 3 ** 2; // 512

// ------------ Operadores Unirios ------------------
// Un operador unario realiza una operacion en un solo operando.
// Negacion -
dinero =- 3; // -3      // -= 3 -> dinero = dinero - 3
console.log(dinero);

// typeof
// Operador logico not !
let valorBooleano = !true;
console.log( valorBooleano);

// Operador de incremento y decremento
// Operador de pre-incremento y pre-decremento
// Preincremento ++valor
// Predecremento --valor

// Operador de post-incremento y post-decremento
// post-incremento valor++
// post-decremento valor--

let numero = 10;
//numero ++;
//++ numero; //
console.log(numero);

let nuevoValor = numero ++;
console.log(nuevoValor);
//


let nuevoDato = ++ numero;
/*
numero = numero + 1;
nuevoDato = numero;

*/

console.log("nuevoDato", nuevoDato); // 14
console.log("numero" , numero); // 14

let x = 3;
let y = ++x;
console.log(`x: ${x++} y: ${++y}`); // 4 - 5
console.log(`x: ${x} y: ${y}`); // 5 - 5

// ------------- Operadores logicos AND && y OR ||

const a = true;
const b = false;
const c = true;
console.log( a || b && c ); // true

// Operadores de corto circuito
// Cuando los operadores logicos AND y OR actuan sobre opeandos diferentes a booleanos.

// OP1 && OP 2  Si OP1 es verdadero, se realiza el resultado de OP2.
// &&
console.log( a && "Holi Crayoli"); 
console.log( b && "Holi Crayoli"); 
console.log( NaN && "El valor es un numero que se puede procesar"); // NaN
console.log("false" && "El valor es false"); // El valor es false
console.log( "" && "No hay dato" ); // ""

// OP1 || OP2 si OP1 es verdadero, se realiza
console.log( a || "Holi Crayoli"); // true
console.log( b || "Holi Crayoli"); // "Holi Crayoli"
console.log( NaN || "El valor es un numero que se puede procesar"); // "El valor ..."
console.log("false" || "El valor es false"); // "false"
console.log( "" || "No hay dato" ); // "No hay dato"

const noDefinido = true;
console.log( noDefinido || theBigBang );

// Quiero imprimir "Estas Autorizado" si la variable isOnline y isActive son true.
const isOnline = true;
const isActive = true;
if ( isOnline )
  if( isActive )
    console.log("Estas Autorizado");

if (isOnline && isActive)
  console.log("Estas autorizado");

 console.log(isOnline && isActive ? "Estas autorizado" : "No estas autorizado");

 console.log( isOnline && isActive && "Estas autorizado");

 // ----------------------- Operadores relacionales ----------------------------
 /*
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la
 comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena,
  lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores
   Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta
    convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en
     comparar los operandos numéricamente.

 < menor que
 > mayor que
 <= menor o igual que
 >= mayor o igual que 
 == igual que 

 */

 console.log( true == "true" ); // false
 console.log(  23 < "40" ); // true - si convierte el "40" a 40 numerico

 console.log( "b" < "A" ); // false - las mayusculas tienen menor valor en Unicode que las minusculas

 console.log( "Hola" < "HOLA"); // false

 console.log("Hola" < "123"); // false

 console.log( "Hola" < "KeHace" + 1000 ); // true
        //    "Hola" < "KeHace1000"

console.log("23" == 23 ); // true

// ------------------- Comparacion estricta --------------------
/*
 === estrictamente igual, debe ser igual en el valor y tipo
 !== estrictamente diferente, debe ser diferente en valor y tipo

*/

console.log( "23" === 23); // false
console.log( "true" === true ); // false
console.log( "45" !== 45 ); // true

// Operador de asignación
const myNumber = 34;

// Desestructuracion (Destructuring)
/*
Es una expresion en JS que hace posible extraer datos de arreglos o objetos y nos 
ayuda a realizar asignaciones mas complejas.

*/
let dataA = 10; 
let dataB = 20;
console.log(`a: ${dataA} , b:${dataB}`);
// Quiero intercambiar los datos
/* let temporal;

temporal = dataA;
dataA = dataB;
dataB = temporal; */
[ dataA, dataB ] = [ dataB, dataA ];
console.log(`a: ${dataA} , b:${dataB}`);

const calificaciones = [50, 80, 100, 30 ];
 // dataA = calificaciones[0]; // 50
 // dataB = calificaciones[1]; // 80
 let resto; // rest parameter
[ dataA, , , dataB, ...resto  ] = calificaciones;
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

const primerAnio ={
    dataA: "43 alumnos",
    dataB: "50 alumnos",
    dataC: "20 alumnos",

};
({dataA, dataB } = primerAnio);

console.log(`a: ${dataA} , b:${dataB} `);

const auto = {
    model: "Chevrolet",
    year: 2023,
    color: "red",
    motor: "2.0"
}

console.log("Modelo " + auto.model); //auto["model"]

// Asignando el valor model del objeto auto a la constante model
                         // inicializar con un valor por default
//const { model, colorAuto = "Pistache"} = auto;
const { model, color: colorAuto } = auto;
console.log("Modelo " + model + ", color: " + colorAuto);

// ------------------- Ejercicio ----------------------
/*
 Hacer una funcion que realice la division de 2 numeros
 y me entregue (return) en entero el cociente y residuo.
*/

const division = (numA, numB) => {
    const cociente = parseInt(numA/numB);
    const residuo  = numA % numB;
    return { cociente, residuo };
  }
  
  //console.log(`El resultado de 9/5, cociente: ${ division(9,5).cociente }, residuo ${ division(9,5).residuo } `);
  
  const { cociente, residuo} = division(9,5);
  console.log(`El resultado de 9/5, cociente: ${ cociente }, residuo ${ residuo } `);
  
  // fin de la sesion;
