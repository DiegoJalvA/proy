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
        name: "Técnico Universitario",
        description: "Técnico Universitario, conocido como el "Rodillo Rojo",que representa la pasión futbolística de la ciudad.",
        image: ".png",
        questions: [
              { question: ¿Su sede está en la ciudad de Ambato?, answer: sí },
              { question: ¿Es conocido como el "Rodillo Rojo"?, answer: sí },
              { question: ¿Es uno de los equipos más populares de Ambato?, answer: sí },
              { question: ¿Ha ganado varios títulos en la Serie B de Ecuador?, answer: sí },
              { question: ¿Su hinchada es conocida como "La Banda Roja"?, answer: sí }
        ]
      },

  {
        name: "Delfin FC",
        description: "Delfín Fútbol Club, conocido por su pasión y éxito, especialmente en la Serie A y competiciones internacionales.",
        image: ".png",
        questions: [
                  { question: ¿Su sede está en la ciudad de Manta?, answer: sí },
                  { question: ¿Su estadio se llama Jocay?, answer: sí },
                  { question: ¿Ha ganado la Serie A de Ecuador?, answer: sí },
                  { question: ¿Sus colores representativos son el amarillo y azul?, answer: sí },
                  { question: ¿Su apodo más conocido es El Cetáceo?, answer: sí }
        ]
      },
  {
        name: "Sociedad Deportiva Aucas",
        description: "Sociedad Deportiva Aucas con sede en Quito y conocido por su apasionada hinchada y sus colores rojo y amarillo.",
        image: ".png",
        questions: [
           { question: ¿Es conocido como los 'Orientales'?, answer: sí },
           { question: ¿Su estadio se llama Olímpico Atahualpa?, answer: sí },
           { question: ¿Ha ganado la Serie A de Ecuador?, answer: no },
           { question: ¿El club tiene una de las hinchadas más apasionadas de Quito?, answer: sí },
           { question: ¿Su apodo proviene de la palabra 'Auca', que significa 'hombre de la sierra' en quichua?, answer: sí }
        ]
      },

  {
        name: "Club Social y Deportivo Macará",
        description: "El Club Social y Deportivo Macará, con sede en Ambato, conocido por su fiel hinchada y sus colores rojo y blanco.",
        image: ".png",
        questions: [
           { question: ¿Su sede está en la ciudad de Ambato?, answer: sí },
           { question: ¿Es conocido como los 'Ídolos del Centro'?, answer: sí },
           { question: ¿Juega en la Serie A de Ecuador?, answer: sí },
           { question: ¿El club tiene una hinchada fiel y numerosa en la región central del Ecuador?, answer: sí },
           { question: ¿Su apodo proviene de su cercanía con la región central del país, especialmente Ambato?, answer: sí }
        ]
      },

  {
        name: "Club Deportivo Cuenca",
        description: "El Club Deportivo Cuenca, reconocido por su pasión deportiva y su gran hinchada.",
        image: ".png",
        questions: [    
             { question: ¿Su sede está en la ciudad de Cuenca?, answer: sí },
             { question: ¿Su estadio se llama Alejandro Serrano Aguilar?, answer: sí },
             { question: ¿El Club Deportivo Cuenca ha ganado la Serie A de Ecuador?, answer: sí },
             { question: ¿El Club Deportivo Cuenca ha tenido jugadores destacados que han sido parte de la selección ecuatoriana?, answer: sí },
             { question: ¿El club ha tenido una rivalidad histórica con el Deportivo Quito?, answer: sí }
        ]
      },

  {
        name: "Imbabura Sporting Club",
        description: "Imbabura Sporting Club, que se caracteriza por su tradición futbolística en la provincia de Imbabura y su hinchada fiel.",
        image: ".png",
        questions: [
            { question: ¿Su sede está en la ciudad de Ibarra?, answer: sí },
            { question: ¿Es conocido por el apodo de 'Los Jardineros'?, answer: sí },
            { question: ¿Los colores principales del club son verde y blanco?, answer: sí },
            { question: ¿El club tiene una hinchada leal principalmente en la provincia de Imbabura?, answer: sí },
            { question: ¿El nombre 'Jardineros' se debe a la tradición agrícola de la región?, answer: sí }

        ]
      },

  {
        name: "Cumbayá",
        description: "Cumbayá Fútbol Club es un equipo de fútbol ecuatoriano, fundado en 2003, con sede en Cumbayá, reconocido por su apodo "Los Albos del Valle" y su enfoque en el desarrollo de jóvenes futbolistas.",
        image: ".png",
        questions: [
              { question: ¿Su sede está en la ciudad de Cumbayá?, answer: sí },
              { question: ¿Ha jugado en la Serie A de Ecuador?, answer: sí },
              { question: ¿Ha tenido una rivalidad destacada con equipos de Quito?, answer: sí },
              { question: ¿El club tiene una hinchada que ha crecido rápidamente en los últimos años?, answer: sí },
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
