/* =================================
   MANUFACTURAS Y CORTINAS CADENA
   Funciones de interacción
================================= */

// Mensaje de bienvenida en consola
console.log("Bienvenido a Manufacturas y Cortinas Cadena");

// Botones de cotización
const quoteButtons = document.querySelectorAll(
    'a[href="#contacto"]'
);

quoteButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Un cliente está interesado en cotizar.");
    });
});

// Año automático del sitio
const currentYear = new Date().getFullYear();

console.log("Año actual:", currentYear);
