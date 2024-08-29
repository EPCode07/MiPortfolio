let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


window.onscroll = function () {
    efectoHabilidades();
}


//Función que aplica la escritura en el h1
function animateText(elementId) {
    // Obtener el texto del elemento y limpiarlo
    const element = document.getElementById(elementId);
    const fullText = element.innerHTML; // Guardar el texto completo
    element.innerHTML = ''; // Limpiar el texto inicialmente

    let index = 0;

    function typeWriter() {
        if (index < fullText.length) {
            element.innerHTML += fullText.charAt(index); // Agregar cada letra
            index++;
            setTimeout(typeWriter, 150); // Velocidad de escritura: 100 ms
        }
    }

    // Llamar a la función para iniciar la animación
    typeWriter();
}

// Llamar a la función animateText con el ID del elemento
animateText('animatedText');