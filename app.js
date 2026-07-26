// ==========================================
// VARIABLES GLOBALES
// ==========================================
let usuarioActualId = null;
let indiceActual = 0;
let listaPreguntasBD = [];
let temporizadorInterval = null;
let tiempoRestante = 0;

const elementoEnunciado = document.getElementById('enunciado');
const contenedorOpciones = document.getElementById('opciones-container');
const btnSiguiente = document.getElementById('btn-siguiente');
const elementoContador = document.getElementById('contador');

// ==========================================
// BLOQUE 1: INICIALIZACIÓN DE LA BASE DE DATOS
// ==========================================
async function inicializarAplicacion() {
    try {
        const totalPreguntas = await db.preguntas.count();

        if (totalPreguntas === 0) {
            console.log("Base de datos vacía. Iniciando el volcado masivo...");
            await db.preguntas.bulkPut(preguntas);
            console.log(`¡Éxito! Se han guardado ${preguntas.length} preguntas en Dexie.`);
        }

        const totalUsuarios = await db.usuarios.count();
        if (totalUsuarios === 0) {
            await db.usuarios.bulkAdd([{ nombre: "Chapi" }, { nombre: "Novia" }]);
        }

        await prepararPantallaUsuarios();

    } catch (error) {
        console.error("Hubo un error al inicializar la base de datos:", error);
    }
}

async function prepararPantallaUsuarios() {
    const datalist = document.getElementById('lista-usuarios');
    datalist.innerHTML = '';
    const usuarios = await db.usuarios.toArray();

    usuarios.forEach(u => {
        const option = document.createElement('option');
        option.value = u.nombre;
        datalist.appendChild(option);
    });

    const ultimoUsuario = localStorage.getItem('ultimoUsuarioOpe');
    if (ultimoUsuario) {
        document.getElementById('input-usuario').value = ultimoUsuario;
    }
}

// ==========================================
// BLOQUE 2: LÓGICA DE CONFIGURACIÓN Y ARRANQUE
// ==========================================
document.getElementById('btn-empezar').addEventListener('click', async function () {
    const nombreIntroducido = document.getElementById('input-usuario').value.trim();
    if (nombreIntroducido === "") return alert("¡No puedes hacer el test sin poner tu nombre!");

    // 1. Gestión del usuario
    let usuarioEnBD = await db.usuarios.where('nombre').equals(nombreIntroducido).first();
    if (!usuarioEnBD) {
        const nuevoId = await db.usuarios.add({ nombre: nombreIntroducido });
        usuarioEnBD = { id: nuevoId, nombre: nombreIntroducido };
    }
    usuarioActualId = usuarioEnBD.id;
    localStorage.setItem('ultimoUsuarioOpe', nombreIntroducido);

    // 2. Extraer opciones elegidas
    const tipoTemario = document.getElementById('select-temario').value;
    const cantidadModo = document.getElementById('select-cantidad').value;

    // 3. Filtrar preguntas de la BD (Recordatorio: últimas 200 son Específico)
    let preguntasExtraidas = await db.preguntas.toArray();

    if (tipoTemario === 'general') {
        // Quitamos las últimas 200
        preguntasExtraidas = preguntasExtraidas.slice(0, preguntasExtraidas.length - 200);
    } else if (tipoTemario === 'especifico') {
        // Cogemos solo las últimas 200
        preguntasExtraidas = preguntasExtraidas.slice(-200);
    }
    // Si es "ambos", se quedan todas.

    // 4. Mezclar aleatoriamente las preguntas filtradas
    preguntasExtraidas.sort(() => Math.random() - 0.5);

    // 5. Ajustar cantidad según el bloque elegido
    if (cantidadModo === '30') {
        listaPreguntasBD = preguntasExtraidas.slice(0, 30);
    } else if (cantidadModo === '50') {
        listaPreguntasBD = preguntasExtraidas.slice(0, 50);
    } else if (cantidadModo === 'simulacro') {
        listaPreguntasBD = preguntasExtraidas.slice(0, 110);
        iniciarTemporizadorSimulacro(); // ¡Arrancamos el reloj!
    } else {
        listaPreguntasBD = preguntasExtraidas; // Todas
    }

    // 6. Cambiar de pantalla y empezar
    document.getElementById('pantalla-seleccion').classList.add('hidden');
    document.getElementById('test-container').classList.remove('hidden');

    cargarPregunta();
});

// Función para controlar el reloj en modo examen
function iniciarTemporizadorSimulacro() {
    const contenedorTemp = document.getElementById('temporizador-container');
    const spanTiempo = document.getElementById('tiempo-restante');

    contenedorTemp.classList.remove('hidden');
    tiempoRestante = 120 * 60; // 120 minutos en segundos

    temporizadorInterval = setInterval(() => {
        tiempoRestante--;

        if (tiempoRestante <= 0) {
            clearInterval(temporizadorInterval);
            alert("⏳ ¡TIEMPO AGOTADO! El simulacro ha terminado automáticamente.");
            document.getElementById('btn-finalizar').click();
        } else {
            // Convertir a formato MM:SS
            const minutos = Math.floor(tiempoRestante / 60);
            const segundos = tiempoRestante % 60;
            spanTiempo.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

            // Si quedan menos de 10 minutos, parpadear en rojo intenso
            if (tiempoRestante < 600) {
                contenedorTemp.classList.add('bg-red-600', 'animate-pulse');
            }
        }
    }, 1000); // 1000 ms = 1 segundo
}

// ==========================================
// BLOQUE 3: LÓGICA DEL TEST
// ==========================================
function cargarPregunta() {
    btnSiguiente.classList.add('hidden');
    contenedorOpciones.innerHTML = '';

    const preguntaActual = listaPreguntasBD[indiceActual];

    elementoContador.textContent = `Pregunta ${indiceActual + 1} de ${listaPreguntasBD.length}`;
    elementoEnunciado.textContent = preguntaActual.enunciado;

    for (const [letra, texto] of Object.entries(preguntaActual.opciones)) {
        const boton = document.createElement('button');
        boton.className = 'opcion-btn w-full text-left p-4 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 text-white font-medium transition-colors cursor-pointer';
        boton.textContent = `${letra.toUpperCase()}) ${texto}`;

        boton.addEventListener('click', function () {
            comprobarRespuesta(boton, letra, preguntaActual.respuesta_correcta, preguntaActual.id);
        });

        contenedorOpciones.appendChild(boton);
    }
}

async function comprobarRespuesta(botonClicado, letraSeleccionada, letraCorrecta, preguntaId) {
    const todosLosBotones = contenedorOpciones.querySelectorAll('.opcion-btn');
    const esAcierto = (letraSeleccionada === letraCorrecta);

    if (esAcierto) {
        botonClicado.className = 'opcion-btn w-full text-left p-4 bg-green-950 border-2 border-green-500 rounded-lg text-green-200 font-bold';
        btnSiguiente.classList.remove('hidden');
    } else {
        botonClicado.className = 'opcion-btn w-full text-left p-4 bg-red-950 border-2 border-red-500 rounded-lg text-red-300 font-medium opacity-70';
        botonClicado.disabled = true;
    }

    todosLosBotones.forEach(btn => {
        if (esAcierto && btn !== botonClicado) {
            btn.disabled = true;
            btn.classList.add('opacity-40');
        }
    });

    try {
        let progreso = await db.progreso_repaso.get({ usuario_id: usuarioActualId, pregunta_id: preguntaId });

        if (!progreso) {
            progreso = {
                usuario_id: usuarioActualId,
                pregunta_id: preguntaId,
                veces_acertada: 0,
                veces_fallada: 0,
                fecha_proximo_repaso: new Date().getTime()
            };
        }

        if (esAcierto) {
            progreso.veces_acertada += 1;
            progreso.fecha_proximo_repaso += 86400000;
        } else {
            progreso.veces_fallada += 1;
            progreso.fecha_proximo_repaso = new Date().getTime();
        }

        await db.progreso_repaso.put(progreso);
        console.log(`Progreso guardado: Pregunta ${preguntaId} - Aciertos: ${progreso.veces_acertada}, Fallos: ${progreso.veces_fallada}`);

    } catch (error) {
        console.error("Error guardando el progreso:", error);
    }
}

btnSiguiente.addEventListener('click', function () {
    indiceActual++;
    if (indiceActual < listaPreguntasBD.length) {
        cargarPregunta();
    } else {
        elementoEnunciado.textContent = "¡Has terminado todas las preguntas!";
        contenedorOpciones.innerHTML = "";
        btnSiguiente.classList.add('hidden');
    }
});

// ==========================================
// BLOQUE 4: ESTADÍSTICAS Y FINALIZACIÓN
// ==========================================
const btnFinalizar = document.getElementById('btn-finalizar');
const btnVolverInicio = document.getElementById('btn-volver-inicio');

btnFinalizar.addEventListener('click', async function () {
    // Si había un reloj de simulacro corriendo, lo detenemos
    if (temporizadorInterval) {
        clearInterval(temporizadorInterval);
    }

    document.getElementById('test-container').classList.add('hidden');
    document.getElementById('estadisticas-container').classList.remove('hidden');

    try {
        const miProgreso = await db.progreso_repaso
            .where('usuario_id')
            .equals(usuarioActualId)
            .toArray();

        let aciertosTotales = 0;
        let fallosTotales = 0;

        miProgreso.forEach(registro => {
            aciertosTotales += registro.veces_acertada;
            fallosTotales += registro.veces_fallada;
        });

        document.getElementById('stat-aciertos').textContent = aciertosTotales;
        document.getElementById('stat-fallos').textContent = fallosTotales;

        const puntosDebiles = miProgreso
            .filter(registro => registro.veces_fallada > 0)
            .sort((a, b) => b.veces_fallada - a.veces_fallada)
            .slice(0, 5);

        const listaDebiles = document.getElementById('lista-puntos-debiles');
        listaDebiles.innerHTML = '';

        if (puntosDebiles.length === 0) {
            listaDebiles.innerHTML = '<li class="text-green-400 italic p-4 bg-gray-700 rounded-lg text-center">¡Genial! Aún no tienes fallos registrados.</li>';
        } else {
            for (const punto of puntosDebiles) {
                const preguntaOriginal = await db.preguntas.get(punto.pregunta_id);

                const li = document.createElement('li');
                li.className = "bg-gray-700 p-4 rounded-lg border border-gray-600 text-sm leading-relaxed";
                li.innerHTML = `
                    <span class="inline-block bg-red-900/50 text-red-400 px-2 py-1 rounded text-xs font-bold mb-2 border border-red-800">
                        Fallada ${punto.veces_fallada} veces
                    </span>
                    <br>
                    ${preguntaOriginal.enunciado}
                `;
                listaDebiles.appendChild(li);
            }
        }

    } catch (error) {
        console.error("Error al cargar las estadísticas:", error);
    }
});

btnVolverInicio.addEventListener('click', function () {
    window.location.reload();
});

inicializarAplicacion();