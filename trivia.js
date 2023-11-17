
// Array de preguntas y respuestas
var preguntas = [
    {
        pregunta: "¿Cuál de las siguientes tecnologías se utiliza para manipular el contenido y el estilo de una página web de manera dinámica en el navegador?",
        opciones: ["MySQL", "React.js", "CSS", "HTML"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué lenguaje de programación se utiliza para dar estilo a las páginas web?",
        opciones: ["CSS", "Java", "Ruby", "C++"],
        respuesta: 0,
    },
    {
        pregunta: "¿Qué es Bootstrap en el desarrollo web?",
        opciones: ["Un lenguaje de programación para la interactividad en el lado del cliente", "Un framework de CSS para el diseño responsivo y la creación de interfaces web", "Un lenguaje de programación backend para servidores web.", "Un sistema de gestión de bases de datos."],
        respuesta: 1,
    },
    {
        pregunta: "¿Cuál de las siguientes tecnologías se utiliza para agregar interactividad y dinamismo a una página web?",
        opciones: ["CSS", "JavaScript", "HTML", "C++"],
        respuesta: 1,
    },
    {
        pregunta: "¿Cuál de los siguientes lenguajes de programación es conocido por su sintaxis clara y legible, así como por su versatilidad en aplicaciones como desarrollo web, análisis de datos y scripting?",
        opciones: ["Ruby", "Java", "Python", "C#"],
        respuesta: 2,
    },
    {
        pregunta: "¿Cuál de las siguientes opciones es un lenguaje de marcado utilizado para estructurar el contenido en páginas web?",
        opciones: ["CSS", "Bootstrap", "Python", "HTML"],
        respuesta: 2,
    },
];

// Variables globales
var indicePregunta = 0;
var respuestasCorrectas = 0;

document.getElementById("jugar-btn").disabled = true;

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    var preguntaActual = preguntas[indicePregunta];
    var preguntaContainer = document.getElementById("pregunta-container");

    // Limpiar el contenedor de preguntas
    preguntaContainer.innerHTML = "";

    // Crear elementos HTML para mostrar la pregunta y opciones

    // creo el elemento div, le doy la clase pregunta y lo pongo dentro de preguntaContainer
    var preguntaElement = document.createElement("div");
    preguntaElement.classList.add("pregunta");
    preguntaElement.textContent = preguntaActual.pregunta;
    preguntaContainer.appendChild(preguntaElement);

    // creo el elemento ul, le doy la clase opciones y lo pongo dentro de preguntaContainer
    var opcionesList = document.createElement("ul");
    opcionesList.classList.add("opciones");
    preguntaContainer.appendChild(opcionesList);

    // por cada opcion de la pregunta creo un elemento li y un input y los pongo dentro de ul
    for (var i = 0; i < preguntaActual.opciones.length; i++) {
        var opcionItem = document.createElement("li");
        var opcionCheckbox = document.createElement("input");
        opcionCheckbox.type = "radio";
        opcionCheckbox.name = "opcion";
        opcionCheckbox.value = i;
        opcionItem.textContent = preguntaActual.opciones[i];
        opcionItem.appendChild(opcionCheckbox);
        opcionesList.appendChild(opcionItem);
    }
}

// Función para comprobar respuestas
function comprobarRespuesta() {
    var checkboxes = document.getElementsByName("opcion");
    var preguntaActual = preguntas[indicePregunta];
    var respuestaUsuario = null;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            respuestaUsuario = parseInt(checkboxes[i].value);
            break;
        }
    }

    if (respuestaUsuario === preguntaActual.respuesta) {
        return true;
    } else {
        return false;
    }
}

// Función para avanzar a la siguiente pregunta
function siguientePregunta() {
    if (comprobarRespuesta()) {
        respuestasCorrectas++;
    }
    indicePregunta++;
    if (indicePregunta < preguntas.length) {
        mostrarPregunta();
    } else {
    // Mostrar resultados finales
        Swal.fire({
            title: "Resultados",
            text: "Has acertado " + respuestasCorrectas + " de " + preguntas.length + " respuestas.",
            icon: "question"
        })
        document.getElementById("siguiente-btn").disabled = true;
        document.getElementById("jugar-btn").disabled = false;
    }
}

// Event listener para el botón "Siguiente"
document.getElementById("siguiente-btn").addEventListener("click", siguientePregunta);

// Mostrar la primera pregunta al cargar la página
mostrarPregunta();


