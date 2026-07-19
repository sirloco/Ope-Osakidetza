# OPE Osakidetza - Plataforma de Repaso

Una aplicación web interactiva diseñada para facilitar la memorización y el estudio de las preguntas para la Oferta Pública de Empleo (OPE) de Osakidetza.

## 🚀 Características Actuales

*   **Interfaz sencilla y directa:** Preguntas de opción múltiple (A, B, C, D).
*   **Feedback Inmediato:** Corrección visual instantánea (verde para aciertos, rojo para fallos).
*   **Reintentos:** Permite seguir intentando hasta dar con la respuesta correcta.
*   **Navegación:** Capacidad de saltar a la siguiente pregunta de forma fluida.

## 🛠️ Tecnologías

*   **Frontend:** HTML5, CSS3, JavaScript (Vanilla).
*   **Datos:** Actualmente utiliza un archivo estático `preguntas.js` con formato JSON.

## 🔮 Próximas Implementaciones (Roadmap)

*   **Migración a Base de Datos:** Transición de `preguntas.js` a una base de datos estructurada (ej. SQLite / IndexedDB) para un mejor manejo de gran volumen de datos (más de 5000 preguntas).
*   **Sistema de Repetición Espaciada (SRS):** 
    *   Algoritmo inteligente para priorizar las preguntas que más se fallan.
    *   Registro de tiempo de respuesta para evaluar el nivel de memorización.
    *   Programación de repasos (diarios, semanales) en función de la curva del olvido.
*   **Estadísticas de Usuario:** Seguimiento del progreso, porcentaje de aciertos y tiempo de estudio.

## ⚙️ Instalación y Uso

Al ser un proyecto frontend estático (en su versión actual), no requiere instalación compleja:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sirloco/Ope-Osakidetza.git
   ```
2. Abre el archivo `index.html` en tu navegador web preferido.
3. ¡Comienza a estudiar!

## 📝 Licencia

Este proyecto es de uso personal y educativo.
