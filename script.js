const teams = [
    {
        name: "Emelec",
        description: "También de Guayaquil, rival histórico de Barcelona SC.",
        image: "emelc.png",
        questions: [
            { question: "¿Es el equipo de Guayaquil?", answer: "sí" },
            { question: "¿Su camiseta es azul?", answer: "sí" },
            { question: "¿Ha ganado varias veces la Serie A?", answer: "sí" },
            { question: "¿El estadio de Emelec se llama Capwell?", answer: "sí" },
            { question: "¿Su hinchada es concocida como LA BOCA DEL POZO?", answer: "sí" }
        ]
    },

    {
        name: "Barcelona SC",
        description: "Equipo de Guayaquil, uno de los más exitosos de la historia.",
        image: "barcelona.png", // Puedes cambiar la URL de la imagen
        questions: [
            { question: "¿Es el equipo de Guayaquil?", answer: "sí" },
            { question: "¿Su camiseta es amarilla?", answer: "sí" },
            { question: "¿Es conocido como idolo del astillero?", answer: "sí" },
            { question: "¿Su estadio se llama Monumental?", answer: "sí" },
            { question: "¿Es el club con más títulos nacionales?", answer: "sí" }
        ]
    },

    {
        name: "Liga de Quito",
        description: "Equipo de Quito, uno de los más exitosos del pais internacionalmente.",
        image: "liga.png", // Puedes cambiar la URL de la imagen
        questions: [
            { question: "¿Es el equipo de Quito?", answer: "sí" },
            { question: "¿Su camiseta es blanca?", answer: "sí" },
            { question: "¿Es conocido como Rey de Copas del Ecuador?", answer: "sí" },
            { question: "¿Su estadio es conocido como casa blanca?", answer: "sí" },
            { question: "¿Es el unico club del Ecuador en ganar una copa libertadores?", answer: "sí" }
        ]
    },

    {
        name: "Independiente del Valle",
        description: "Equipo de Quito, uno de los más exitosos del país internacionalmente.",
        image: "idv.png", // Puedes cambiar la URL de la imagen
        questions: [
            { question: "¿Es el equipo de Quito?", answer: "sí" },
            { question: "¿Su camiseta es rayada?", answer: "sí" },
            { question: "¿Es conocido como El Mata Gigantes?", answer: "sí" },
            { question: "¿Su estadio se llama Banco Guayaquil?", answer: "sí" },
            { question: "¿Es uno de los clubes más exitosos en competiciones internacionales?", answer: "sí" }
        ]
    },

    {
        name: "El nacional",
        description: "El Club Nacional, un equipo que representa la pasión y el espíritu deportivo ecuatoriano",
        image: ".png",
        questions: [
            { question: "¿Su color representativo es el Rojo?", answer: "sí" },
            { question: "¿Campeón de la Copa Ecuador 2024?", answer: "sí" },
            { question: "¿Conocido como Los Puros Criollos?", answer: "sí" },
            { question: "¿Su estadio se llama Olímpico Atahualpa?", answer: "sí" },
            { question: "¿Su primer campeonatonacional fue en 1967?", answer: "sí" }
        ]
    },

    {
        name: "",
        description: "",
        image: ".png",
        questions: [
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" }
        ]
    },

  {
        name: "",
        description: "",
        image: ".png",
        questions: [
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" },
            { question: "¿?", answer: "sí" }
        ]
      },
       

    
    
    // Agregar más equipos aquí...
];

let currentQuestion = 0;
let currentTeamIndex = Math.floor(Math.random() * teams.length); // Selección aleatoria al principio

function askQuestion() {
    if (currentQuestion < teams[currentTeamIndex].questions.length) {
        const question = teams[currentTeamIndex].questions[currentQuestion].question;
        document.getElementById('question').innerText = question;
        document.getElementById('answers').innerHTML = `
            <button onclick="answer('sí')">Sí</button>
            <button onclick="answer('no')">No</button>
        `;
    } else {
        showResult();
    }
}

function answer(userAnswer) {
    const correctAnswer = teams[currentTeamIndex].questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        currentQuestion++; // Avanzamos a la siguiente pregunta
        askQuestion(); // Preguntamos la siguiente
    } else {
        resetGame(); // Reiniciamos el juego si la respuesta es incorrecta
    }
}

function resetGame() {
    currentQuestion = 0; // Reiniciamos las preguntas
    currentTeamIndex = Math.floor(Math.random() * teams.length); // Elegimos un nuevo equipo aleatorio
    document.getElementById('team-image').style.display = 'none'; // Ocultamos la imagen del equipo
    askQuestion(); // Comenzamos nuevamente con el equipo elegido
}

function showResult() {
    // Mostrar el resultado final cuando se adivina el equipo
    document.getElementById('team-image').src = teams[currentTeamIndex].image;
    document.getElementById('team-image').style.display = 'block'; // Mostramos la imagen
    document.getElementById('question').innerText = `¡Es el equipo ${teams[currentTeamIndex].name}!`;
    document.getElementById('answers').innerHTML = `<p>${teams[currentTeamIndex].description}</p>`;
    
    // Recargamos la página después de un segundo
    setTimeout(function() {
        location.reload(); // Recarga la página automáticamente
    }, 2000); // 1 segundo de espera
}

// Iniciar el juego
askQuestion();
