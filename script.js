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
        name: "Universidad Católica",
        description: "La Universidad Católica, un equipo que encarna la fe, la pasión y el espíritu deportivo ecuatoriano",
        image: ".png",
        questions: [
           { question: "¿Su color representativo es el azul?", "answer": "sí" },
           { question: "¿Es conocido como el Trencito Azul?", "answer": "sí" },
           { question: "¿Juega en el estadio Olímpico Atahualpa?", "answer": "sí" },
           { question: "¿Fue fundado en 1963?", "answer": "sí" },
           {question: "¿Compite en la Serie A de Ecuador?", "answer": "sí" }
        ]
    },

  {
        name: "Orense",
        description: "Orense, un equipo que refleja el crecimiento y la pasión por el fútbol en Ecuador.",
        image: ".png",
        questions: [
            { question: "¿Su sede es en la cuidad de Machala?", answer: "sí" },
            { question: "¿El equipo compite en la serie A de Ecuador?", answer: "sí" },
            { question: "¿Es conocido como el Bananero?", answer: "sí" },
            { question: "¿Su color representativoes el verde?", answer: "sí" },
            { question: "¿Va a jugar su primera competición internacional?", answer: "sí" }
        ]
      },

  {
        name: "Mushuc Runa",
        description: "Mushuc Runa, un equipo ecuatoriano que simboliza identidad indígena y pasión por el fútbol.",
        image: ".png",
        questions: [
            { question: "¿Su sede esta en Ambato?", answer: "sí" },
            { question: "¿Es conocido como el equipo del pueblo?", answer: "sí" },
            { question: "¿Fue el primer equipo indígena en jugar en la serie A de Ecuador?", answer: "sí" },
            { question: "¿Su nombre significa HOMBRE NUEVO en quichua?", answer: "sí" },
            { question: "¿Su estadio esta ubicado más de 3,200 metros a nivel del mar?", answer: "sí" }
        ]
      },

      {
        name: "Libertad",
        description: "Libertad Fútbol Club,es un equipo de Loja con una larga historia en el fútbol ecuatoriano.",
        image: ".png",
        questions:[
         { question: "¿Su sede está en la ciudad de Loja?", "answer": "sí" },
         { question: "¿Juega en la Serie A de Ecuador?", "answer": "sí" },
         { question: "¿Fue campeón del Ascenco Nacional en 2021?", "answer": "sí" },
         { question: "¿Su estadio se llama Reina del Cisne?", "answer": "sí" },
         { question: "¿Es conocido como 'Orgullo Lojano'?", "answer": "sí" },
         { question: "¿Es considerado uno de los equipos tradicionales de Loja?", "answer": "sí" }
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
