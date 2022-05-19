const header = document.querySelector("header");
const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link")

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");
/* sticky  navbar */

function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll",stickyNavbar);
/* animacion de scroll INICIO */
let sr = ScrollReveal({
    duration:2500,
    distance: "60px"
});
sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image",{origin:"top",delay:700});
/* filtro de la parte de portafolio */
let mixer = mixitup('.portfolio-gallery',{
    selectors: {
        target: '.prt-card'
    },
    animation: {
        duration: 700
    }
});

/* efectos de imagenes modal del protafolio */
let currentIndex = 0;
zoom_icons.forEach((icn, i) => icn.addEventListener("click",()=>{
    prt_section.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentIndex = i;
    changeImage(currentIndex);
}));

modal_overlay.addEventListener("click", ()=>{
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling");
});

next_btn.addEventListener("click", ()=>{
    if(currentIndex === 5)
    {
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    changeImage(currentIndex);
});
prev_btn.addEventListener("click", ()=>{
    if(currentIndex === 0)
    {
        currentIndex = 5;
    }
    else{
        currentIndex--;
    }
    changeImage(currentIndex);
});

function changeImage(index){
    images.forEach((img) => img.classList.remove("showImage"));
    images[index].classList.add("showImage");
}
/* Tema oscuro y claro */
let firstTheme = localStorage.getItem("dark");
changeTheme(+firstTheme);
function changeTheme(isdDark) {
    if (isdDark) {
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun");
        localStorage.setItem("dark", 1);
    }
    else
    {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon");
        localStorage.setItem("dark", 0);
    }
}
toggle_btn.addEventListener("click", ()=>{
    changeTheme(!document.body.classList.contains("dark"));
});
/* Hamburgesa */
hamburger.addEventListener("click", ()=>{
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling");
});

links.forEach((link) =>
    link.addEventListener("click", ()=>{
        document.body.classList.remove("open");
        document.body.classList.remove("stopScrolling");
    })
);







const typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">Frontend Developer</i>',
		'<i class="mascota">Backend Developer</i>',
		'<i class="mascota">Full Stack Developer</i>',
		'<i class="mascota">Mobile Developer</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 65, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 15, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '/', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});