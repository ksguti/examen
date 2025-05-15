// questions.js

window.questions = {
  PREPARATORIA: {
    "1er año": {
      lengua:   [ { id: 1, text: "¿Qué es una vocal?", options: ["Letra que suena sola", "Letra que no suena", "Un número", "Un signo"], correct: "Letra que suena sola" },
        { id: 2, text: "¿Cuál es el plural de 'lápiz'?", options: ["Lápices", "Lápiz", "Lapices", "Lápizs"], correct: "Lápices" },
        { id: 3, text: "¿Qué palabra es un sustantivo?", options: ["Correr", "Sol", "Rápido", "Saltar"], correct: "Sol" },
        { id: 4, text: "¿Qué es un cuento?", options: ["Una historia corta", "Un libro largo", "Una poesía", "Un dibujo"], correct: "Una historia corta" },
        { id: 5, text: "¿Cuál es el antónimo de 'alto'?", options: ["Bajo", "Largo", "Grande", "Ancho"], correct: "Bajo" },
        { id: 6, text: "¿Qué es una sílaba?", options: ["Una letra", "Un grupo de letras que se pronuncian juntas", "Un número", "Un signo"], correct: "Un grupo de letras que se pronuncian juntas" },
        { id: 7, text: "¿Cuál es el artículo en: 'El gato duerme'?", options: ["Gato", "Duerme", "El", "Ninguno"], correct: "El" },
        { id: 8, text: "¿Qué palabra es un adjetivo?", options: ["Casa", "Bonita", "Caminar", "Sol"], correct: "Bonita" },
        { id: 9, text: "¿Qué es una oración?", options: ["Una palabra sola", "Un grupo de palabras con sentido completo", "Un dibujo", "Un sonido"], correct: "Un grupo de palabras con sentido completo" },
        { id: 10, text: "¿Cuál es el sinónimo de 'feliz'?", options: ["Triste", "Alegre", "Cansado", "Enojado"], correct: "Alegre" } ],
      matematica:[ { id: 1, text: "¿Cuánto es 4 + 3?", options: ["6", "7", "8", "9"], correct: "7" },
        { id: 2, text: "¿Cuántos lados tiene un cuadrado?", options: ["3", "4", "5", "6"], correct: "4" },
        { id: 3, text: "¿Qué número sigue al 15?", options: ["14", "16", "17", "18"], correct: "16" },
        { id: 4, text: "¿Cuánto es 3 x 5?", options: ["12", "15", "18", "20"], correct: "15" },
        { id: 5, text: "¿Cuál es la mitad de 8?", options: ["3", "4", "5", "6"], correct: "4" },
        { id: 6, text: "¿Cuánto es 10 - 4?", options: ["5", "6", "7", "8"], correct: "6" },
        { id: 7, text: "¿Qué es un número par?", options: ["Termina en 1", "Termina en 0, 2, 4, 6, 8", "Termina en 3", "Termina en 5"], correct: "Termina en 0, 2, 4, 6, 8" },
        { id: 8, text: "¿Cuántas decenas hay en 30?", options: ["2", "3", "4", "5"], correct: "3" },
        { id: 9, text: "¿Cuál es el mayor número?", options: ["12", "15", "9", "11"], correct: "15" },
        { id: 10, text: "¿Cuánto es 6 + 6?", options: ["10", "11", "12", "13"], correct: "12" }
       ],
      ciencias: [ { id: 1, text: "¿Qué necesitan las plantas para crecer?", options: ["Solo tierra", "Agua y sol", "Solo aire", "Nada"], correct: "Agua y sol" },
        { id: 2, text: "¿Qué animal es un mamífero?", options: ["Cocodrilo", "Serpiente", "Vaca", "Águila"], correct: "Vaca" },
        { id: 3, text: "¿Qué es el agua?", options: ["Un sólido", "Un líquido", "Un gas", "Un metal"], correct: "Un líquido" },
        { id: 4, text: "¿Qué parte de la planta es la hoja?", options: ["La que está en el suelo", "La que es verde y plana", "La que tiene flores", "La que es dura"], correct: "La que es verde y plana" },
        { id: 5, text: "¿Qué da energía al cuerpo?", options: ["Ropa", "Alimentos", "Juguetes", "Libros"], correct: "Alimentos" },
        { id: 6, text: "¿Qué es el sol?", options: ["Una estrella", "Un planeta", "Una luna", "Un cometa"], correct: "Una estrella" },
        { id: 7, text: "¿Qué animal pone huevos?", options: ["Perro", "Gato", "Gallina", "Caballo"], correct: "Gallina" },
        { id: 8, text: "¿Qué es el aire?", options: ["Un líquido", "Un gas", "Un sólido", "Un color"], correct: "Un gas" },
        { id: 9, text: "¿Qué protege la piel del cuerpo?", options: ["Huesos", "Músculos", "Pelo", "Ropa"], correct: "Ropa" },
        { id: 10, text: "¿Qué es un ciclo del agua?", options: ["Movimiento del agua en la naturaleza", "Un juego", "Un tipo de planta", "Un animal"], correct: "Movimiento del agua en la naturaleza" } ],
      sociales: [ { id: 1, text: "¿Qué es una familia?", options: ["Un grupo de amigos", "Personas que viven juntas y se quieren", "Un equipo de fútbol", "Una escuela"], correct: "Personas que viven juntas y se quieren" },
        { id: 2, text: "¿Cuál es la capital de Ecuador?", options: ["Guayaquil", "Quito", "Cuenca", "Loja"], correct: "Quito" },
        { id: 3, text: "¿Qué es una regla?", options: ["Un juego", "Una norma para convivir", "Un dibujo", "Un alimento"], correct: "Una norma para convivir" },
        { id: 4, text: "¿Qué medio de transporte es un avión?", options: ["Terrestre", "Marítimo", "Aéreo", "Subterráneo"], correct: "Aéreo" },
        { id: 5, text: "¿Qué es un parque?", options: ["Un lugar para estudiar", "Un lugar para jugar", "Un lugar para trabajar", "Un lugar para dormir"], correct: "Un lugar para jugar" },
        { id: 6, text: "¿Qué es una escuela?", options: ["Un lugar para comprar", "Un lugar para aprender", "Un hospital", "Un mercado"], correct: "Un lugar para aprender" },
        { id: 7, text: "¿Qué es el respeto?", options: ["Ignorar a otros", "Tratar bien a las personas", "Mandar a otros", "Criticar"], correct: "Tratar bien a las personas" },
        { id: 8, text: "¿Qué es una ciudad?", options: ["Un lugar pequeño con pocas personas", "Un lugar grande con muchas personas", "Un bosque", "Un río"], correct: "Un lugar grande con muchas personas" },
        { id: 9, text: "¿Qué es un río?", options: ["Un lugar seco", "Agua que fluye", "Una montaña", "Un edificio"], correct: "Agua que fluye" },
        { id: 10, text: "¿Qué es compartir?", options: ["Guardar todo", "Dar algo a otros", "Esconder cosas", "Romper objetos"], correct: "Dar algo a otros" } ]
    }
  },

  BASICA_ELEMENTAL: {
    "2do año": {
      lengua:    [ /* … */ ],
      matematica:[ /* … */ ],
      ciencias:  [ /* … */ ],
      sociales:  [ /* … */ ]
    },
    "3ro año": {
      lengua:    [ /* … */ ],
      matematica:[ /* … */ ],
      ciencias:  [ /* … */ ],
      sociales:  [ /* … */ ]
    },
    "4to año": {
      lengua:    [ /* … */ ],
      matematica:[ /* … */ ],
      ciencias:  [ /* … */ ],
      sociales:  [ /* … */ ]
    }
  },

  BASICA_MEDIA: {
    "5to año": {
      lengua:    [ /* … */ ],
      matematica:[ /* … */ ],
      ciencias:  [ /* … */ ],
      sociales:  [ /* … */ ],
      ingles:    [ /* … */ ]
    },
    "6to año": { 
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ] 
    },
    "7mo año": { 
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ] }
  },

  BASICA_SUPERIOR: {
    "8vo año": {
      lengua:    [ /* … */ ],
      matematica:[ /* … */ ],
      fisica:    [ /* … */ ],
      quimica:   [ /* … */ ],
      biologia:  [ /* … */ ],
      historia:  [ /* … */ ],
      ingles:    [ /* … */ ]
    },
    "9no año": { 
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ] },
    "10mo año":{ 
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ] }
  },

  BGU: {
    "1ro BGU": {
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ]
    },
    "2do BGU": { 
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ] },
    "3ro BGU": { 
      lengua:      [ /* … */ ],
      matematica:  [ /* … */ ],
      fisica:      [ /* … */ ],
      quimica:     [ /* … */ ],
      biologia:    [ /* … */ ],
      historia:    [ /* … */ ],
      ciudadania:  [ /* … */ ],
      filosofia:   [ /* … */ ],
      ingles:      [ /* … */ ] }
  }
};
