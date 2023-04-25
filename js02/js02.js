console.log("Sesion JS02");

// -------- Funcion declarada ----------
// function declaration, function statement
// Una caracteristica es que las funciones declaradas tiene hoisting
// console.log("Es resultado de 5*10 = " + multiplica(5,10)); // Invocando la funcion
multiplica(5,10);
multiplica(8,8);
multiplica(-4,2);
/*
 function nombreFuncionCamelCase ( parametros ){
    instrucciones;
 }

 */
function multiplica (operandoA , operandoB){
    const resultado = operandoA * operandoB;
    console.log(resultado);
}

function divide (dividendo , divisor){
    return dividendo / divisor;
    
}

console.log( divide(5,2) ); // 2.5
console.log( divide(5,"2") ); // 2.5
console.log( divide("5","2") ); // 2.5
console.log( divide("5 0","2") ); // NaN

/* { // Este es un bloque de codigo
    const operandoA = 5
    const operandoB = 10
    const resultado = operandoA * operandoB;
    console.log(resultado);
 } 
*/
// ------ Funciones expresadas --------------
// Function expressions
// Son declaradas dentro de la asignación de una variable
// Estas funciones pueden ser anonimas (no tienen nombre)
// Las funciones expresadas no tiene hoisting, porque no se
// Carga en memoria hasta que se utilice.

/* Sintaxis

const nombreVariable = function nombreFuncion( parametros){
    instrucciones;
}

*/

const sum = function sumatoria(a, b) {
    return a + b;
}
const resta = function (a , b) {
    return a - b;
}
const potencia = function (a , b) {
    return a ** b;
}

console.log( sum(9 , 9) ); // 18
console.log( resta(90 , 20) ); // 70
console.log( potencia(5 , 3) ); // 125

// ---------- Funciones autoinvocadas --------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anonimas

(function (){
    console.log("Me autoinvoco en la funcion: ");
}) ();

// --------- Funciones Flecha -------------
// Arrow Function
// Son funciones similares a las funciones declaradas, pero:
// No requieren la palabra function
// Si tiene una sola instruccion no requiere las {}
// Si la instruccion es el mismo retorno, no requiere la palabra return

const areaRectangulo = (base , altura) => base * altura;

console.log("Area de rectanfulo 5x3: " + areaRectangulo(5, 3) );

// ------- Parametros default --------------
/**
 * Este comentario es la documentacion de la funcion
 * @param {*} base esto es la descripcion de base
 * @param {*} altura esto es la descripcion de altura
 * @returns area del rectangulo
 */
const areaTriangulo = (base=1 , altura=1) => base * altura / 2;

console.log("Area de triangulo b:5 a:10 = " + areaTriangulo(5,10) ); // 25
console.log("Area de triangulo b:8 = " + areaTriangulo(8) ); // 4

//---------- Parametros rest -----------------
// Rest Parameters
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se representan como un array

function sumatoriaVariosNumeros(a , b, ...restoDatos ){
    let suma;
    suma = a + b;
    for (let index = 0; index < restoDatos.length; index++) {
        suma += restoDatos[index]; // suma = suma + restoDatos[index]
    } 

    return suma;
}

console.log("Sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 6) ); // 11
console.log("Sumatoria de varios numeros: " + sumatoriaVariosNumeros(5, 6, 9, 10) ); // 30
console.log("Sumatoria: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50) ); // 100

// ---------- Funciones CallBack --------------------
// Funcion que se pasa a otra funcion como argumento, para luego invocarse
// para completar algun tipo de rutina o accion

// 3 funciones, una que imprima en consola, alert, DOM h1.
// 1 parametro de entrada
// no tienen return

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
    console.log(mensaje);
  }
  
// Función que muestra una alerta en la pantalla
function showAlert(mensaje) {
    alert(mensaje);
  }
  
// Función que agrega un encabezado h1 al DOM
function addH1(mensaje) {
    const h1 = document.createElement("h1");
    h1.innerText = mensaje;
    document.body.appendChild(h1);
} 

printToConsole("Hola, mundo!");
//showAlert("¡Bienvenido!"); // bienvenido alerta

 // GET NAME

 function getNamePrintToConsole( ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran dia`;
    printToConsole(text);
 }
 function getNamePrintToDom( ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran dia`;
    addH1(text);
 }
 function getNamePrint( funcionImprimir ){ // esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran dia`;
    funcionImprimir(text);
 }

/* getNamePrint( printToConsole ); // pasando referencia de la funcion porque no tiene()
getNamePrint( showAlert );
getNamePrint( addH1 ); */
 // getNamePrintToConsole();
 // getNamePrintToDom();

 // -------------------------------------
/*
    Ejercicio 2
    Escribe una función que tome un arreglo de números,
    duplique el valor de cada número del arreglo,
    e imprima el nuevo arreglo actualizado.
    [5, 10, 15, 20, 25] -> [10, 20, 30, 40, 50]
*/

function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      const duplicate = arr[i] * 2;
      doubleNumbers.push(duplicate);
    }
   return doubleNumbers;
}

// Función que nos sirve de callback
// const duplicate = (number) => number * 2;
/*
function doubleWithMap( array ){
    const duplicateNumber = array.map( function(number){
        return number * 2;
    }  );
    return duplicateNumber;
}*/

function doubleWithMap( array ){
   return array.map( number=> number * 2 );    
}


const numbers = [5, 10, 15, 20, 25]; 
//console.log(double(numbers));
console.log(doubleWithMap(numbers));
console.log( numbers.map(number => number * 2)); // numbers.map()
console.log(numbers);

//
/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
  salida: "Cursos en común: Programming, Music"
*/



function cursosEnComun (student1Courses,student2Courses) {
    const courses = [];
    for (let i=0; i < student1Courses.length; i++) {
     for (let j=0; j < student2Courses.length; j++) {
      if (student1Courses[i] == student2Courses[j]){
        courses.push( student1Courses[i] );
      }
     }
    }
    return `Cursos en común: ${courses}`;     
  }

// --------------------- Usando método filter e includes

const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];

function getCommonCoursesWithFilter(student1Courses,student2Courses) {
    return student1Courses.filter(course => student2Courses.includes(course));
}

const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses);
const commonCoursesWithStudent3 = getCommonCoursesWithFilter( commonCourses, student3Courses)
console.log("Common courses:", commonCoursesWithStudent3.join(", "));

// ------------------------------------
// Contar la cantidad de caracteres de una frase
// pepe pecas pica papas con un pico y una pala
// cantidad de letras p:8
// resolverlo usando arrow function

phrase = "pepe pecas pica papas con un pico y una pala";

const countChar = (p, phrase) => phrase.split("").filter( c => c == p).length;
console.log("Cantidad de letras 'p': ", countChar('p', phrase));

// -------------- Funciones recursivas -------------------
// Es una tecnica de programacion en donde la funcion se llama a si misma
// Se debe tener precaucion de no entrar a un bucle infinito

/*
    function funcionRecursiva(valor ){
        if ( condicionDeParo ){

        }
        else {
            // Llamada recursiva
        }
    }
*/

const factorialConCicloFor = numero =>{
    let factorial = 1;
    for(let i = numero; i > 0; i-- ){
        factorial *= i; // factorial = factorial * i;
    }
    return factorial;
}

function factorialRecursivo ( numero ) {
    if( numero === 1){
        return 1;
    }
    return numero * factorialRecursivo( numero -1);
}

console.log("El factorial de 5: " + factorialConCicloFor(5));
console.log("El factorial de 5: " + factorialRecursivo(5));

// ------------ Ejercicio ---------------------------------
// Una función recursiva que muestre en consola
/*
Saludo 1
Saludo 2
Saludo 3
 ...
Saludo 10

saludo(10);
*/

function saludos(numeroSaludo ){
    if ( numeroSaludo > 1 ){
        saludos(numeroSaludo -1);
    }
        console.log("Saludo " + numeroSaludo);
}

saludos(10);

