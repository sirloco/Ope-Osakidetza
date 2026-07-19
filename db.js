// 1. Instanciamos la base de datos con un nombre para tu proyecto
const db = new Dexie('OpeOsakidetzaDB');

// 2. Definimos la estructura de las tablas (Object Stores)
// Nota: En Dexie solo necesitas definir las claves primarias (id) y los campos 
// por los que vas a querer filtrar o buscar. El resto de datos (como los textos) se guardan solos.
db.version(1).stores({

    // ++id significa que Dexie le asignará un número automáticamente (1, 2, 3...)
    usuarios: '++id, nombre',

    // Usamos el 'id' que ya viene en tu archivo preguntas.js para no duplicar
    preguntas: 'id',

    // Esta es la tabla que cruza datos. 
    // [usuario_id+pregunta_id] es un índice compuesto para buscar rápidamente 
    // el progreso de un usuario concreto en una pregunta concreta.
    progreso_repaso: '++id, usuario_id, pregunta_id, [usuario_id+pregunta_id], fecha_proximo_repaso'

});

// (Opcional) Mensaje en consola para asegurarnos de que funciona
db.on('ready', function () {
    console.log("¡Base de datos OpeOsakidetzaDB cargada y lista para la acción!");
});

// Le decimos a Dexie que abra la base de datos de forma explícita
db.open().catch(function (err) {
    console.error('Error al abrir la base de datos: ', err);
});