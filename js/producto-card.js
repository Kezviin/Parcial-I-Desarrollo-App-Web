class TarjetaProducto extends HTMLElement {

   
    connectedCallback() {

       
        var nombre = this.getAttribute('nombre');
        var precio = this.getAttribute('precio');
        var imagen = this.getAttribute('imagen');
        var descripcion = this.getAttribute('descripcion');

        
        var shadow = this.attachShadow({ mode: 'open' });

        
        var estilos = document.createElement('style');
        estilos.textContent = `
            .tarjeta {
                background-color: white;
                border: 2px solid #d4b896;
                border-radius: 8px;
                padding: 15px;
                width: 200px;
                text-align: center;
                font-family: Arial, sans-serif;
            }

            .imagen-producto {
                width: 100%;
                height: 150px;
                background-color: #e8e0d0;
                border: 2px dashed #b8956a;
                border-radius: 5px;
                margin-bottom: 10px;
                overflow: hidden;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .imagen-producto img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .nombre {
                font-weight: bold;
                color: #3b2a1a;
                margin-bottom: 5px;
            }

            .precio {
                color: #8B0000;
                font-weight: bold;
                margin-bottom: 5px;
            }

            .descripcion {
                font-size: 12px;
                color: #666;
                margin-bottom: 10px;
            }

            .btn-agregar {
                background-color: #4caf50;
                color: white;
                border: none;
                padding: 8px 10px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 13px;
                font-weight: bold;
                width: 100%;
            }

            .btn-agregar:hover {
                background-color: #388e3c;
            }
        `;

        
        var contenedor = document.createElement('div');
        contenedor.className = 'tarjeta';
        contenedor.innerHTML = `
            <div class="imagen-producto">
                <img src="${imagen}" alt="${nombre}">
            </div>
            <p class="nombre">${nombre}</p>
            <p class="precio">${precio}</p>
            <p class="descripcion">${descripcion}</p>
            <button class="btn-agregar">Agregar al carrito</button>
        `;

        shadow.appendChild(estilos);
        shadow.appendChild(contenedor);

       
        var boton = shadow.querySelector('.btn-agregar');
        boton.addEventListener('click', function() {
         
            var precioNumero = parseInt(precio.replace(/\./g, '').replace('$', ''));
            agregarAlCarrito(nombre, precioNumero, boton);
        });
    }
}


customElements.define('tarjeta-producto', TarjetaProducto);