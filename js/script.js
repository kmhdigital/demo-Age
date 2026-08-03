/* ==========================================================================
   Ledessertmx - Lógica JavaScript Independiente
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ledessertmx app loaded successfully.');
    
    // Ejemplo de inicialización de componentes o lógica global
    initApp();
});

function initApp() {
    // Configuración inicial de notificaciones, modales o interactividad
}
const CONFIG = {
    empresa: "LeDessertmx",
    slogan: "Le Dessert by Sofi Villarreal",
    telefono: "528116055365",

    logo: "img/logo.png",
    hero: "img/hero.jpg",

    galeria: [
        "img/Pastel.jpg",
        "img/Paste2.jpg",
        "img/Paste3.jpg",
        "img/Paste4.jpg",
        "img/Paste5.jpg",
        "img/Paste6.jpg"
    ]
};
window.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("business-logo").src = CONFIG.logo;

    document.getElementById("hero-section").style.backgroundImage =
        `linear-gradient(rgba(30,50,52,.45),rgba(30,50,52,.55)),url('${CONFIG.hero}')`;

});
galeria:[
 "img/Pastel1.jpg",
 "img/Pastel2.jpg",
 "img/Pastel3.jpg",
 "img/Paste4.jpg",
 "img/Paste5.jpg",
 "img/Paste6.jpg",
 ...
]
