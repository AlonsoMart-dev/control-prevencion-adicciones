/*====================================
      Test calificacion
====================================*/

function evaluarTest(){

    let total = 0;

    const formulario = document.getElementById("formularioTest");

    const respuestas = formulario.querySelectorAll("select");

    respuestas.forEach(select => {

        total += parseInt(select.value);

    });

    const resultado = document.getElementById("resultado");

    if(total <= 10){

        resultado.innerHTML = `
            <h2 style="color:green;">Riesgo Bajo</h2>
            <p>Mantienes hábitos relativamente saludables.</p>
        `;

    }

    else if(total <= 25){

        resultado.innerHTML = `
            <h2 style="color:orange;">Riesgo Moderado</h2>
            <p>Existen factores de riesgo que requieren atención preventiva.</p>
        `;

    }

    else{

        resultado.innerHTML = `
            <h2 style="color:red;">Riesgo Alto</h2>
            <p>Se recomienda buscar orientación profesional.</p>
        `;

    }

}

/*====================================
      ZOOM INFOGRAFÍAS
====================================*/

function abrirImagen(src){

    document.getElementById("modalImagen").style.display = "flex";

    document.getElementById("imagenGrande").src = src;

}

function cerrarImagen(){

    document.getElementById("modalImagen").style.display = "none";

}

window.onclick = function(event){

    let modal = document.getElementById("modalImagen");

    if(event.target === modal){

        modal.style.display = "none";

    }

}


/*=========================================
      CARRUSEL DE HISTORIAS
=========================================*/

const slides = document.querySelectorAll('.historia-slide');

let indiceActual = 0;

function mostrarSlide(indice){

    slides.forEach(slide => {

        slide.classList.remove('activo');

    });

    slides[indice].classList.add('activo');

}

function siguienteSlide(){

    indiceActual++;

    if(indiceActual >= slides.length){

        indiceActual = 0;

    }

    mostrarSlide(indiceActual);

}

function anteriorSlide(){

    indiceActual--;

    if(indiceActual < 0){

        indiceActual = slides.length - 1;

    }

    mostrarSlide(indiceActual);

}

const btnSiguiente = document.querySelector('.siguiente');
const btnAnterior = document.querySelector('.anterior');

if(btnSiguiente){

    btnSiguiente.addEventListener('click', siguienteSlide);

}

if(btnAnterior){

    btnAnterior.addEventListener('click', anteriorSlide);

}


let pausado = false;

let intervaloCarrusel = setInterval(function(){

    if(!pausado && slides.length > 0){

        siguienteSlide();

    }

}, 5000);

const btnPausa = document.getElementById("btnPausa");

if(btnPausa){

    btnPausa.addEventListener("click", function(){

        pausado = !pausado;

        if(pausado){

            btnPausa.innerHTML = "▶ Reanudar";

        }else{

            btnPausa.innerHTML = "⏸ Pausar Lectura";

        }

    });

}