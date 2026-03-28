# Parcial I - Desarrollo de Aplicaciones Web

## Descripcion del proyecto

Este proyecto corresponde al Parcial I de la asignatura Desarrollo de
Aplicaciones Web. La aplicacion consiste en una pagina web que simula
una tienda de productos llamada Take-Fast donde se muestran diferentes
categorias y productos cargados desde un archivo JSON.

La pagina incluye un sistema basico de inicio de sesion una interfaz
estructurada con componentes reutilizables y un diseno organizado
mediante HTML CSS y JavaScript.

---

## Tecnologias utilizadas

- HTML5 para la estructura de la pagina
- CSS3 para los estilos y diseno visual
- JavaScript para la logica de la aplicacion
- JSON para el almacenamiento de datos de productos

---

## Estructura del proyecto

    Parcial-I-Desarrollo-App-Web
    │
    ├── index.html
    ├── login.html
    ├── README.md
    │
    ├── Css
    │   └── styles.css
    │
    ├── js
    │   ├── main.js
    │   ├── login.js
    │   └── producto-card.js
    │
    ├── componentes
    │   ├── header.html
    │   ├── footer.html
    │   └── sidebar.html
    │
    ├── data
    │   └── products.json
    │
    └── imagenes
        ├── aseo
        ├── deportes
        ├── electrodomesticos
        └── gamer

---

## Que es la modularizacion y por que es importante

La modularizacion es dividir el codigo en partes pequenas y separadas
donde cada parte tiene una responsabilidad especifica. En vez de tener
todo el codigo en un solo archivo se separa en modulos independientes.

Es importante porque hace el codigo mas facil de leer mas facil de
mantener y mas facil de reutilizar. Si hay un error es mas facil
encontrarlo porque el codigo esta organizado por partes.

---

## Que son los fragmentos

Los fragmentos son partes del HTML que se guardan en archivos separados
y se cargan dinamicamente con JavaScript usando fetch. En este proyecto
el header el footer y el sidebar son fragmentos que viven en la carpeta
componentes y se insertan en la pagina principal cuando carga.

---

## Que son las plantillas template

Las plantillas son bloques de HTML definidos con la etiqueta template
que no se muestran en la pagina hasta que JavaScript los activa. Son
como un molde que se puede reutilizar muchas veces. En este proyecto
se uso una plantilla para generar todas las tarjetas de productos
dinamicamente en vez de escribirlas una por una en el HTML.

---

## Que son los Web Components

Los Web Components son elementos HTML personalizados que uno mismo
crea. Se pueden usar como cualquier etiqueta HTML normal pero con
comportamiento y estilos propios. Usan Shadow DOM que es una burbuja
aislada que protege los estilos del componente para que no interfieran
con el resto de la pagina. En este proyecto se creo el componente
tarjeta-producto que recibe atributos como nombre precio imagen y
descripcion.

---

## Como funciona el formulario de inicio de sesion

ADVERTENCIA esto es solo con fines educativos y no es seguro para
aplicaciones reales. Las credenciales estan guardadas directamente
en el codigo JavaScript lo cual no se debe hacer en produccion.

El login funciona asi:
- El usuario ingresa su usuario y contrasena
- JavaScript compara lo que escribio con las credenciales guardadas en el codigo
- Si son correctas redirige al index.html
- Si son incorrectas muestra un mensaje de error

Las credenciales de prueba son usuario admin y contrasena 1234.

---

## Buenas practicas aplicadas

- Se uso camelCase para nombrar variables y funciones en JavaScript
- Se uso kebab-case para las clases en CSS
- El codigo esta separado por responsabilidades login.js para el login
  main.js para la logica principal y producto-card.js para el componente
- Se agregaron comentarios en el codigo para explicar cada seccion
- Los archivos estan organizados en carpetas segun su tipo

---

## Funcionalidades principales

- Sistema basico de inicio de sesion
- Carga dinamica de productos desde JSON usando fetch
- Visualizacion de productos por categorias
- Carrito de compras funcional
- Componentes reutilizables cargados dinamicamente
- Plantillas HTML para generar productos
- Web Component personalizado con Shadow DOM

---

## Como ejecutar el proyecto

1. Descargar o clonar el repositorio
2. Abrir la carpeta del proyecto en Visual Studio Code
3. Abrir el archivo login.html con Live Server
4. Ingresar con usuario admin y contrasena 1234
5. Sera redirigido automaticamente al index.html

---

## Autores

**Kevin Libardo Rosas Quintero 192550**
**Julian Esteban Devera Escalante 192587**\
Estudiantes -- Ingeniería de Sistemas
