// MENÚ PARA DISPOSITIVOS MÓVILES

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN

document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// AÑO AUTOMÁTICO

document.getElementById("current-year").textContent =
    new Date().getFullYear();

console.log("Manufacturas y Cortinas Cadena: sitio iniciado correctamente.");
