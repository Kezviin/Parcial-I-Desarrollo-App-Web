// Array para guardar los productos del carrito
var carrito = [];

// Abrir el panel del carrito
function abrirCarrito() {
    var panel = document.getElementById("panel-carrito");
    panel.classList.remove("oculto");
}

// Cerrar el panel del carrito
function cerrarCarrito() {
    var panel = document.getElementById("panel-carrito");
    panel.classList.add("oculto");
}

// Agregar producto al carrito
function agregarAlCarrito(nombre, precio, boton) {
    var inputCantidad = boton.nextElementSibling;
    var cantidad = parseInt(inputCantidad.value);

    if (cantidad < 1) {
        alert("La cantidad debe ser al menos 1");
        return;
    }

    // Buscar si el producto ya está en el carrito
    var productoExistente = null;
    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre === nombre) {
            productoExistente = carrito[i];
            break;
        }
    }

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre: nombre, precio: precio, cantidad: cantidad });
    }

    actualizarCarrito();
    abrirCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Actualizar la vista del carrito
function actualizarCarrito() {
    var listaCarrito = document.getElementById("lista-carrito");
    var contador = document.getElementById("contador-carrito");
    var total = document.getElementById("total-carrito");

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p class='carrito-vacio'>No hay productos aún.</p>";
        contador.textContent = "0";
        total.textContent = "0";
        return;
    }

    var totalPrecio = 0;
    var totalItems = 0;

    for (var i = 0; i < carrito.length; i++) {
        var item = carrito[i];
        var subtotal = item.precio * item.cantidad;
        totalPrecio += subtotal;
        totalItems += item.cantidad;

        var div = document.createElement("div");
        div.className = "item-carrito";
        div.innerHTML = "<span>" + item.nombre + " x" + item.cantidad + "</span>" +
                        "<span>$" + subtotal.toLocaleString() + "</span>" +
                        "<button class='btn-eliminar-item' onclick='eliminarDelCarrito(" + i + ")'>🗑</button>";
        listaCarrito.appendChild(div);
    }

    contador.textContent = totalItems;
    total.textContent = totalPrecio.toLocaleString();
}

// Cerrar sesion
function cerrarSesion() {
    window.location.href = "login.html";
}