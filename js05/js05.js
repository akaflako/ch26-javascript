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

// ||
console.log( a || "Holi Crayoli"); // true
console.log( b || "Holi Crayoli"); // "Holi Crayoli"
console.log( NaN || "El valor es un numero que se puede procesar"); // "El valor ..."
console.log("false" || "El valor es false"); // "false"
console.log( "" || "No hay dato" ); // 