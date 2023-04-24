console.log("Sesión JS01");

// Son 7 datos primitivos
// String: "Hola"
console.log("Tipo de dato string: ", "Hola");

// Number: 12, -45, 367.12, +Infinity, NaN
// Los numéricos usan 64 bits para almacenar, pero solo se usan 53 bits
// para representar el número.
console.log("Tipo de dato Number: ", 12, -45, 367.12, 45/0, -56/0, 56*"hola");
console.log("Valor máximo: ", Number.MAX_VALUE);
console.log("Valor seguro: ", Number.MAX_SAFE_INTEGER);

// BigInt
// Sirven para representar valores numéricos enteros, de los que el tipo number
// no puede representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1 : ", Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2 : ", Number.MAX_SAFE_INTEGER + 2);
let myBigInt = 9007199254740991n; // se agrega la letra "n" al final
console.log("Valor de dato BigInt: ", myBigInt);
console.log("MAX_SAFE_INTEGER + 1n : ", myBigInt + 1n );
console.log("MAX_SAFE_INTEGER + 2n : ", myBigInt + 2n );

// Boolean
// Tenemos solo 2 estados: true/false
console.log("Tipo de dato boolean: ", true);
console.log("Tipo de dato boolean: ", false);

// Undefined
// un dato que es declarado pero no definido en el tipo
let myVar; // Acá solo se declara
console.log("Tipo de dato undefined: ", myVar);

// null
// Intencionalmente se borra el tipo de dato
let myVarNull; // solo se declara
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // undefined
myVarNull = "Saludos Sr. PP"; // se asigna un dato string
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // string
myVarNull = null;
console.log("Tipo de dato myVarNull: ", typeof(myVarNull) ); // null

// Symbol
// crea propiedades privadas en los objetos.
//--------------------------------------------------------------------------------------
// Tipos de datos Object
// Object: 
const misDatosDePerfil = {
    // clave: valor
    nombre: "Marco",
    apellido: "Martínez",
    edad: 22,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        rock: "La célula que explota",
        corridosTumbados: "El Hijo Mayor"
    },
    nombreCompleto: function fullName(){
        return this.nombre + " " + this.apellido + ", soy el belicón.";
    }
}
const miInstagram = {
    // clave: valor
    nombre: "El Belicon",
    apellido: "777",
    edad: null,
    isBelicoso: true,
    musicaPreferidaPorGenero: {
        corridosTumbados: "El Hijo Mayor"
    },
    nombreCompleto: function fullName(){
        return this.nombre + " " + this.apellido + ", soy el belicón.";
    }
}

console.log("Datos completos: ", misDatosDePerfil );
console.log("Nombre: ", misDatosDePerfil.nombre );
console.log("Música de fin de semana: ", misDatosDePerfil.musicaPreferidaPorGenero.corridosTumbados);
console.log("Nombre completo: ", misDatosDePerfil.nombreCompleto() );
console.log("Nombre completo: ", miInstagram.nombreCompleto() );

// Array
// Almacena diferentes tipos de datos, su primer elemento es el indice 0

const cancionesPP = [
    "Soy el Belicón",
    "El Azul",
    "El Tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
];

console.log("Cancion con color: ", cancionesPP[1]);
console.log("Canciones hechas en el 2021: ", cancionesPP[4].total );
console.log("Canciones hechas en el 2021: ", cancionesPP[4]["total"] );
console.log("Canciones hechas en el 2021: ", cancionesPP[4]["2021"] );
console.log("Canciones hechas en el 2021: ", cancionesPP[4][2021] );

console.log("Num total de elementos: ", cancionesPP.length);
console.log("Contiene la cancion AMG: ", cancionesPP.indexOf("AMG")>-1 );

// ------------------------------------------------------------------------------------
// Conversion de datos
const myNumber = 420; // Minutos de la sesión JS 01
console.log("Num. minutos en la sesión: " + myNumber);
// 
const myNumberTxt = String(myNumber);
console.log("Num. minutos de la sesion: " + myNumberTxt);

// toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria: " + sumatoria ); // 500

// toParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria: " + sumatoriaEntera ); // 500

// toBoolean
const isBelicoso = "true";
console.log( typeof isBelicoso);
console.log( Boolean(isBelicoso));

if ( isBelicoso == false )
    console.log("Denle su belikin");
else
    console.log("Abra paso a la barredora");
    
// Boolean
// para que sea False, debe ser: "", 0, null, undefined
// Number
// [] = 0, [30] = 30, [3,1] = NaN, false = 0, true = 1
// String
// [] = "", [1,2] = "1,2", function(){}, {} = [object Object]
