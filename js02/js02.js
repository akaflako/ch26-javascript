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
console.log( divide(5,"2") ); // NaN
console.log( divide("5","2") );
console.log( divide("5 0","2") );

 /* { // Este es un bloque de codigo
    const operandoA = 5
    const operandoB = 10
    const resultado = operandoA * operandoB;
    console.log(resultado);
 } */
 