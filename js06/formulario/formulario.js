console.log("Sesion JS06 Formulario");

const refForm = document.forms["registro"];

refForm.addEventListener( "submit" , (event) => {
    event.preventDefault(); // este metodo hace que omita las acciones por default
    //console.log(event);

    user = {
        email: refForm.elements["inputEmail4"].value,
        password: refForm.elements["inputPassword4"].value, 
        address: refForm.elements["inputAddress"].value
    }
    console.log(user);
} );

