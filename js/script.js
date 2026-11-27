
let boton = document.getElementById("botonSorpresa");

let mensaje = document.getElementById("mensajeSorpresa");

function mensajeSorpresa(){
    mensaje.classList.remove("oculto");
}

boton.addEventListener("click", mensajeSorpresa);

let botonesMenu = document.querySelectorAll(".menu button");

botonesMenu.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let nombreSeccion = boton.dataset.seccion;

        let apartados = document.querySelectorAll(".apartado");

        apartados.forEach(function(apartado) {
            apartado.classList.add("oculto");
        });

        let seccionSeleccionada = document.getElementById(nombreSeccion);

        seccionSeleccionada.classList.remove("oculto");

    });

});

// Crear corazones flotantes
for (let i = 0; i < 18; i++) {
    let corazon = document.createElement("span");

    corazon.classList.add("corazon");
    corazon.textContent = "♡";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = (6 + Math.random() * 7) + "s";
    corazon.style.animationDelay = (Math.random() * -10) + "s";

    document.body.appendChild(corazon);
}