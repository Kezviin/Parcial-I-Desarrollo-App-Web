
var usuarioCorrecto = "admin";
var contrasenaCorrecto = "1234";

var boton = document.getElementById("btn-login");

boton.addEventListener("click", function() {

    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var mensajeError = document.getElementById("mensaje-error");

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecto) {
        window.location.href = "index.html";
    } else {
        mensajeError.textContent = "Usuario o contraseña incorrectos";
    }

});