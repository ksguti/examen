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
      lengua:      [ {
          id: 1,
          text: "El ensayo argumentativo se basa, principalmente, en la opinión personal del escrito, por lo tanto, la estructura es:",
          options: [
            "Título, introducción, desarrollo y conclusión.",
            "Título, introducción, cuerpo y conclusión.",
            "Título, inicio, desarrollo y desenlace.",
            "Título, argumentación y desenlace."
          ],
          correct: "Título, introducción, desarrollo y conclusión."
        },
        {
          id: 2,
          text: "Los grupos de jóvenes que utilizan un lenguaje muy particular se denominan:",
          options: [
            "Lenguaje vulgar",
            "Jergas juveniles",
            "Lenguaje formal",
            "Lenguaje oral"
          ],
          correct: "Jergas juveniles"
        },
        {
          id: 3,
          text: "Género literario de expresión oral o escrita, destinado a ser representado ante un público:",
          options: [
            "Género dramático",
            "Tragedia",
            "Teatro",
            "Comedia"
          ],
          correct: "Género dramático"
        },
        {
          id: 4,
          text: "Relaciona A–D con 1–4 y subraya la correcta:",
          options: [
            "B1, C2, D3, A4",
            "A2, B3, C1, D2",
            "A3, B2, C3, D4",
            "A2, B4, C1, D3"
          ],
          correct: "B1, C2, D3, A4"
        },
        {
          id: 5,
          text: "Complementos circunstanciales de modo, oraciones que los usan:",
          options: [
            "4, 5, 6",
            "1, 3, 5",
            "2, 4, 5",
            "1, 5, 6"
          ],
          correct: "2, 4, 5"
        },
        {
          id: 6,
          text: "Relacione jerga juvenil con significado:",
          options: [
            "1b, 2c, 3d, 4a, 5e, 6f",
            "1c, 2a, 3d, 4b, 5e, 6f",
            "1a, 2c, 3b, 4d, 5e, 6f",
            "1a, 2d, 3c, 4b, 5e, 6f"
          ],
          correct: "1a, 2d, 3c, 4b, 5e, 6f"
        } ],
      matematica:  [ {
          id: 1,
          text: "Clasifique:\n1) 3 es real, racional y entero no negativo\n2) √2 es real, racional y fraccionario\n3) 2/9 es real, racional y entero positivo\n4) 15 es real y racional",
          options: [
            "1 V, 2 F, 3 F, 4 V",
            "1 F, 2 F, 3 F, 4 V",
            "1 V, 2 F, 3 V, 4 F",
            "1 V, 2 V, 3 F, 4 V"
          ],
          correct: "1 V, 2 F, 3 F, 4 V"
        },
        {
          id: 2,
          text: "Resuelve ⌊x-3⌋ < 5. Conjunto solución:",
          options: [
            "(2,8)",
            "(5,2)",
            "(-2,8)",
            "(-8,2)"
          ],
          correct: "(2,8)"
        },
        {
          id: 3,
          text: "10 kilómetros equivalen a ___ metros; 1 m tiene ___ decímetros; 2 hm tienen ___ metros; 8 dam ___ metros",
          options: [
            "10 000 m, 100 dm, 200 m, 80 m",
            "100 m, 10 dm, 10 m, 80 m",
            "10 000 m, 10 dm, 20 m, 8 m",
            "10 000 m, 10 dm, 200 m, 80 m"
          ],
          correct: "10 000 m, 100 dm, 200 m, 80 m"
        },
        {
          id: 4,
          text: "Problema: Préstamo $900 con 5 % de descuento. ¿Cuánto paga?",
          options: [
            "$855",
            "$900",
            "$945",
            "$850"
          ],
          correct: "$855"
        } ],
      fisica:      [ /* … */ ],
      quimica:     [ {
          id: 1,
          text: "El átomo consta de:",
          options: [
            "Núcleo con protones, electrones y neutrones",
            "Envoltura solo con electrones",
            "Envoltura con electrones y partículas alfa",
            "Núcleo con protones y neutrones"
          ],
          correct: "Núcleo con protones, electrones y neutrones"
        },
        {
          id: 2,
          text: "Fenómeno de hielo a agua líquida:",
          options: [
            "Ebullición",
            "Condensación",
            "Fusión",
            "Sublimación"
          ],
          correct: "Fusión"
        },
        {
          id: 3,
          text: "Un átomo con número atómico 6 tiene ___ protones.",
          options: ["6", "8", "14"],
          correct: "6"
        },
        {
          id: 4,
          text: "Tasa: nacimientos, defunciones, emigración, inmigración → relación correcta:",
          options: [
            "Nacimientos→mortalidad, Defunciones→natalidad, Incorporaciones→emigración, Salidas→inmigración",
            "Nacimientos→natalidad, Defunciones→mortalidad, Incorporaciones→inmigración, Salidas→emigración",
            "Nacimientos→emigración, Defunciones→inmigración, Incorporaciones→natalidad, Salidas→mortalidad",
            "Nacimientos→inmigración, Defunciones→natalidad, Incorporaciones→mortalidad, Salidas→emigración"
          ],
          correct: "Nacimientos→natalidad, Defunciones→mortalidad, Incorporaciones→inmigración, Salidas→emigración"
        },
        {
          id: 5,
          text: "¿Dónde se encuentra cada partícula subatómica?",
          options: [
            "a) núcleo, b) corteza, c) periferia",
            "a) alrededor, b) nube, c) corteza",
            "a) alrededor, b) dentro, c) dentro",
            "a) dentro, b) alrededor, c) fuera"
          ],
          correct: "a) alrededor, b) dentro, c) dentro"
        },
        {
          id: 6,
          text: "Alcanos: relacionar número de carbonos con nombre:",
          options: [
            "3 Propano, 4 Pentano, 8 Nonano, 13 Tridecano, 16 Hexadecano, 18 Octadecano, 20 Triacontano",
            "3 Propano, 4 Butano, 8 Octano, 13 Tridecano, 16 Hexadecano, 18 Octadecano, 20 Icosano, 30 Triacontano",
            "3 Propano, 4 Butano, 8 Octano, 13 Pentadecano, 16 Hexadecano, 18 Heptadecano, 20 Dodecano, 30 Triacontano",
            "3 Butano, 4 Propano, 8 Octano, 13 Tricosano, 16 Hexadecano, 18 Octodecano, 20 Icosano, 30 Triacontano"
          ],
          correct: "3 Propano, 4 Butano, 8 Octano, 13 Tridecano, 16-Hexadecano, 18 Octadecano, 20 Icosano, 30 Triacontano"
        } ],
      biologia:    [ /* … */ ],
      historia:    [ {
          id: 1,
          text: "Ecuador comenzó la época republicana con Juan José Flores, quien fue:",
          options: [
            "Un ex presidente latinoamericano, conocedor de la región",
            "Un funcionario político local de gran experiencia",
            "Un venezolano, destacado general del ejército libertador",
            "Un abogado ilustre, conocedor de la cultura ecuatoriana"
          ],
          correct: "Un venezolano, destacado general del ejército libertador"
        },
        {
          id: 2,
          text: "Flores impulsó un Proyecto de Constitución del país que fue denominado “Carta de la Esclavitud”. ¿A qué debió tal denominación?",
          options: [
            "Al aumento de la duración del gobierno y de sus atribuciones.",
            "A la imposición de la religión católica como culto oficial del Estado.",
            "A la obligación para todo funcionario de jurar sobre la Constitución reformada.",
            "A que ratificaba el estatus de esclavos a los negros e indígenas."
          ],
          correct: "A que ratificaba el estatus de esclavos a los negros e indígenas."
        },
        {
          id: 3,
          text: "Desde las páginas de “El Quiteño Libre”, este grupo difundía:",
          options: [
            "Informaciones destacadas sobre la alta sociedad quiteña",
            "Ideas sostenidas la burguesía y la nobleza ilustre del país",
            "Noticias sobre la reacción española ante los eventos nacionales",
            "Críticas a la supresión de libertades al gobierno de Juan José Flores."
          ],
          correct: "Críticas a la supresión de libertades al gobierno de Juan José Flores."
        },
        {
          id: 4,
          text: "Durante los gobiernos marcistas, Urbina estableció una medida que constituye una gran conquista social del Ecuador Republicano. Esta medida fue:",
          options: [
            "La educación gratuita y laica.",
            "La abolición de la esclavitud.",
            "El voto secreto.",
            "El voto femenino."
          ],
          correct: "La abolición de la esclavitud."
        },
        {
          id: 5,
          text: "Durante la República, el conservadurismo es:",
          options: [
            "La agrupación política que representa a los grupos terratenientes.",
            "El sistema que propone la participación popular en la toma de decisiones.",
            "El sistema de gobierno en el que una sola persona concentra los poderes.",
            "Movimiento que usa al Estado para conservar o restaurar tradiciones, costumbres o creencias."
          ],
          correct: "Movimiento que usa al Estado para conservar o restaurar tradiciones, costumbres o creencias."
        },
        {
          id: 6,
          text: "El gobierno de Jamil Mahuad adoptó como medida económica:",
          options: [
            "La dolarización de la economía ecuatoriana",
            "La reducción del Estado mediante las privatizaciones",
            "La nacionalización de la banca extranjera",
            "La política de control de precios sobre los productos"
          ],
          correct: "La dolarización de la economía ecuatoriana"
        },
        {
          id: 7,
          text: "Orden cronológico de los últimos cuatro presidentes:",
          options: [
            "4, 2, 1, 3",
            "4, 1, 2, 3",
            "4, 3, 2, 1"
          ],
          correct: "4, 3, 2, 1"
        },
        {
          id: 8,
          text: "Orden cronológico de los momentos históricos:",
          options: [
            "1, 2, 3, 4, 5",
            "2, 4, 1, 5, 3",
            "4, 2, 1, 3, 5",
            "2, 1, 4, 5, 3"
          ],
          correct: "2, 4, 1, 5, 3"
        },
        {
          id: 9,
          text: "Laicismo en la educación significa:",
          options: [
            "Que se trata de una educación liberal y progresista.",
            "Que propone la escolaridad gratuita y obligatoria.",
            "Que en la educación no interviene ninguna confesión religiosa.",
            "Que propone una educación igualitaria para hombres y mujeres."
          ],
          correct: "Que en la educación no interviene ninguna confesión religiosa."
        },
        {
          id: 10,
          text: "El Concordato garciano tenía por objetivo:",
          options: [
            "Otorgar a la Iglesia católica el control sobre la educación",
            "Impulsar la educación libre y laica en todo el territorio del país",
            "Fomentar la existencia de la libertad de cultos",
            "Prohibir la lectura de textos extranjeros en las escuelas"
          ],
          correct: "Otorgar a la Iglesia católica el control sobre la educación"
        } ],
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
