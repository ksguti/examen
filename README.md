Exámenes de Ingreso - Institución Educativa
Aplicación web para practicar exámenes de ingreso alineados al currículo ecuatoriano, con soporte para ingreso de nombre del estudiante, resultados personalizados y panel de administrador.
Estructura del Proyecto
examenes-ingreso/
├── index.html          # Estructura HTML
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   ├── app.js          # Lógica principal
│   ├── questions.js    # Preguntas en JSON
│   ├── results.js      # Almacenamiento de resultados
├── package.json        # Configuración del proyecto
├── README.md           # Este archivo

Requisitos

Visual Studio Code
Extensión Live Server (opcional, para servidor local)
Navegador web moderno (Chrome, Firefox, etc.)
Node.js (opcional, para instalar dependencias)

Instalación

Clonar o descargar el proyecto:

Descarga el proyecto o clona el repositorio en tu máquina.
Descomprime en una carpeta (por ejemplo, examenes-ingreso).


Abrir en Visual Studio Code:

Abre VS Code.
Selecciona Archivo > Abrir carpeta y elige la carpeta examenes-ingreso.


Instalar dependencias (opcional):

Si deseas usar un servidor local, abre la terminal en VS Code (Terminal > Nuevo terminal).
Ejecuta:npm install




Ejecutar el proyecto:

Opción 1: Usar Live Server:
Instala la extensión Live Server en VS Code.
Haz clic derecho en index.html y selecciona Open with Live Server.


Opción 2: Abrir directamente:
Abre index.html en un navegador haciendo doble clic o arrastrándolo.


Opción 3: Usar npm:
En la terminal, ejecuta:npm start







Uso

Estudiantes:

Ingresa tu nombre en el formulario inicial.
Selecciona un nivel educativo (Básica Elemental, Media, Superior, BGU).
Escoge una materia y responde las 10 preguntas.
Al finalizar, verás tu puntuación junto con tu nombre.
Puedes reintentar o volver a otras materias.


Administrador:

En la pantalla de niveles, selecciona "Panel de Administrador".
Ingresa la contraseña: admin123.
Verás una tabla con:
Nombre del estudiante.
Nivel educativo.
Materia evaluada.
Puntuación.
Fecha y hora de la evaluación.


Puedes borrar todos los resultados (acción irreversible).



Notas

Los resultados se almacenan en localStorage del navegador. Si limpias los datos del navegador, los resultados se perderán.
Para editar preguntas, modifica js/questions.js en el formato JSON.
La contraseña del administrador es fija (admin123) por simplicidad. Para producción, considera un sistema de autenticación más seguro.

Solución de Problemas

Live Server no funciona: Asegúrate de tener Node.js instalado y ejecuta npm install nuevamente.
Los estilos no cargan: Verifica que las rutas en index.html sean correctas (css/styles.css).
Los resultados no se guardan: Asegúrate de que el navegador permita el uso de localStorage.

