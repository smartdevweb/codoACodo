const nombre = document.getElementById("name");
const email = document.getElementById("mail");

const error = document.getElementById("wrong");
error.style.color = "white";
error.style.backgroundColor = "black";


function formSend() {

    let mensajesError = [];

    if (nombre.value === null || nombre.value === "") {
        mensajesError.push("•¡ATENCIÓN! Necesitas ingresar tu nombre para envíar éste formulario•")
    }

    if (email.value === null || email.value === "") {
        mensajesError.push("•SE REQUIERE UNA DIRECCIÓN DE CORREO ELECTRÓNICO•")
    }

    error.innerHTML = mensajesError.join(" - - - - - - - - - - ");

    return false;
}

