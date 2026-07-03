let indiceActual = 0;

// Referencias al HTML
const elementoEnunciado = document.getElementById('enunciado');
const contenedorOpciones = document.getElementById('opciones-container');
const btnSiguiente = document.getElementById('btn-siguiente');
const elementoContador = document.getElementById('contador');

// Función para cargar una pregunta en pantalla
function cargarPregunta() {
    // Ocultar botón siguiente y vaciar opciones previas
    btnSiguiente.classList.add('oculto');
    contenedorOpciones.innerHTML = '';
    
    const preguntaActual = preguntas[indiceActual];
    
    // Actualizar textos
    elementoContador.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;
    elementoEnunciado.textContent = preguntaActual.enunciado;

    // Crear los botones para cada opción (a, b, c, d)
    for (const [letra, texto] of Object.entries(preguntaActual.opciones)) {
        const boton = document.createElement('button');
        boton.classList.add('opcion-btn');
        boton.textContent = `${letra.toUpperCase()}) ${texto}`;
        
        // Lo que pasa al hacer clic en una opción
        boton.addEventListener('click', function() {
            comprobarRespuesta(boton, letra, preguntaActual.respuesta_correcta);
        });

        contenedorOpciones.appendChild(boton);
    }
}

// Función que comprueba si has acertado
function comprobarRespuesta(botonClicado, letraSeleccionada, letraCorrecta) {
    const todosLosBotones = contenedorOpciones.querySelectorAll('.opcion-btn');

    if (letraSeleccionada === letraCorrecta) {
        // Acierto: poner verde y atenuar el resto
        botonClicado.classList.add('correcta');
        
        todosLosBotones.forEach(btn => {
            btn.disabled = true; // Desactivar botones para no seguir pinchando
            if (btn !== botonClicado) {
                btn.classList.add('atenuada');
            }
        });

        // Mostrar el botón para ir a la siguiente
        btnSiguiente.classList.remove('oculto');
    } else {
        // Fallo: poner rojo y atenuar solo ese
        botonClicado.classList.add('incorrecta');
        botonClicado.classList.add('atenuada');
        botonClicado.disabled = true;
    }
}

// Evento para el botón "Siguiente"
btnSiguiente.addEventListener('click', function() {
    indiceActual++;
    if (indiceActual < preguntas.length) {
        cargarPregunta();
    } else {
        elementoEnunciado.textContent = "¡Has terminado todas las preguntas!";
        contenedorOpciones.innerHTML = "";
        btnSiguiente.classList.add('oculto');
    }
});

// Arrancar la app cargando la primera pregunta
cargarPregunta();