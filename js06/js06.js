console.log("Sesion JS06");

// funcion definida
function findElementByIdFnc01 ( /* parametros */ ){
    /* instrucciones */
    return null;
}

// funcion expresada 
const findElementByIdFnc02 = function nombre (/* parametros */) {
    return 3*4;
};

const findElementByIdFnc03 = (/* parametros */) => {
    return 3*4;
};



const findElementById = ( nameOfDeveloper) => {
    const tituloRef = document.getElementById("titulo");
    const nombreDesarrollador = "Marco Arath";

    //tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
    tituloRef.innerHTML += nameOfDeveloper;
}
findElementById(", Marco Arath");

const changeSubtitleById = ( newTxt) => {
    const subtitleRef = document.getElementById("subtitulo");

    subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;
}
changeSubtitleById("viernes de cholos");

// ------------ Encontrar el ementos por su tag ------------------
// getElementsByTagName()

const changeEmphasis = ( newText, url ) => {
    const emphasisRef = document.getElementsByTagName("em");
    //console.log(emphasisRef);
    for (element of emphasisRef){
        console.log(element);
        element.innerHTML = `<a href="${url}">${newText}</a>`;
    }
};

changeEmphasis("viernes friki", "https://www.facebook.com/FrikiplazaMonterrey/");

// ---------------- Selector universal ------------------
// querySelector

const findElementByQuerySelector = ( ) => {
    const refElements = document.querySelector("p em");
    refElements.innerHTML = `La Ch26 es bien <strong>chida</strong>`

}
findElementByQuerySelector();

// ------------ Crear nuevo elemento -----------------
// appendChild

const newElement = () => {
    const newElementRef = document.createElement("p"); // agregamos elemento <p>

    newElementRef.innerHTML = `La Ch26 le gusta: 
    <ul>
        <li>El pan de muerto</li>
        <li>El chismecito</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>
    </ul>
    `
    const articleRef = document.querySelector("article");
    articleRef.appendChild( newElementRef ); // Se agrega el nuevo elemento
    // Clonar el nodo anterior
    //const nodoClonado = articleRef.cloneNode( true );
    //document.querySelector("#article-news").appendChild( nodoClonado);

}
newElement();

const changeColor = (color ) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
}
changeColor("red");

// Agregar a un elemento un border
// .style.border 
// .style.border = "thick solid #0000FF";

const changeBorder = (border ) => {
    const refBorder = document.getElementById("datos-generation");
    refBorder.style.border = border;
}
changeBorder("thick solid #0000FF");

// ---------------- Propiedades de visualizacion (desaparecer elementos) --------------
// display: none (Quitar el elemento del DOM)
// visibility: hidden (Ocultar elemento)

const quitarBoton = ( ) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display = "none";
}

const ocultarBoton = ( ) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "hidden"; // ocultar elemento    
}

const reestablecerBoton = ( ) => {
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility = "visible";
    buttonRef.style.display = "inline";
}