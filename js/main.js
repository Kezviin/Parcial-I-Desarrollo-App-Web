fetch('components/header.html')
    .then(function(response) { return response.text(); })
    .then(function(data) { document.getElementById('header').innerHTML = data; });

fetch('components/sidebar.html')
    .then(function(response) { return response.text(); })
    .then(function(data) { document.getElementById('sidebar').innerHTML = data; });

fetch('components/footer.html')
    .then(function(response) { return response.text(); })
    .then(function(data) { document.getElementById('footer').innerHTML = data; });



var carrito = [];

function abrirCarrito() {
    var panel = document.getElementById("panel-carrito");
    panel.classList.remove("oculto");
}

function cerrarCarrito() {
    var panel = document.getElementById("panel-carrito");
    panel.classList.add("oculto");
}

function agregarAlCarrito(nombre, precio, boton) {
    var inputCantidad = boton.nextElementSibling;
    var cantidad = parseInt(inputCantidad.value);

    if (cantidad < 1) {
        alert("La cantidad debe ser al menos 1");
        return;
    }

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

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

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

function cerrarSesion() {
    window.location.href = "login.html";
}



fetch('data/products.json')
    .then(function(response) { return response.json(); })
    .then(function(productos) {

        var plantilla = document.getElementById('plantilla-producto');

        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];

            
            var clon = plantilla.content.cloneNode(true);

            
            clon.querySelector('img').src = producto.imagen;
            clon.querySelector('img').alt = producto.nombre;
            clon.querySelector('.nombre-producto').textContent = producto.nombre;
            clon.querySelector('.precio-producto').textContent = producto.precioTexto;

            
            var boton = clon.querySelector('.btn-agregar');
            var nombre = producto.nombre;
            var precio = producto.precio;

            boton.addEventListener('click', function(n, p) {
                return function() {
                    var input = this.nextElementSibling;
                    agregarAlCarrito(n, p, this);
                };
            }(nombre, precio));

            
            var gridId = 'grid-' + producto.categoria;
            var grid = document.getElementById(gridId);
            if (grid) {
                grid.appendChild(clon);
            }
        }
    });