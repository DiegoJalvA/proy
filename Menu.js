// 1. REGISTRO DE ASISTENCIA

// Objeto que guarda si se asistió o no por cada día de la semana laboral
let asistencia = {
    Lunes: null,
    Martes: null,
    Miércoles: null,
    Jueves: null,
    Viernes: null
};

// Contadores para llevar registro de asistencias e inasistencias
let siAsistio = 0;
let noAsistio = 0;

// Función para registrar la asistencia de un día
function registroAsistencia() {
    let diasSemana;

    // Bucle para mantener el menú activo hasta que el usuario lo cierre o seleccione salir
    do {
        diasSemana = prompt(`SELECCIONE DIA PARA REGISTRAR ASISTENCIA:\n
        1. LUNES                                           5. VIERNES\n
        2. MARTES                                         6. SÁBADO\n
        3. MIÉRCOLES                                    7. DOMINGO\n
        4. JUEVES                                           8. SALIR`);

        // Si el usuario cancela o elige salir, se termina la función
        if (diasSemana === null || diasSemana === "8") break;

        diasSemana = parseInt(diasSemana); // Convierte la opción ingresada a número

        // Si selecciona un día entre lunes y viernes
        if (diasSemana >= 1 && diasSemana <= 5) {
            let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
            let diaSeleccionado = dias[diasSemana - 1];

            // Verifica si ya se registró asistencia para ese día
            if (asistencia[diaSeleccionado] !== null) {
                alert(`Ya habías registrado asistencia para ${diaSeleccionado}`);
                continue;
            }

            // Solicita al usuario registrar si asistió o no
            let respuesta = prompt(`Registrar asistencia:\n
        1.SI asistio\n
        2.NO asistio`)

            // Marca asistencia según respuesta
            if (respuesta === "1") {
                asistencia[diaSeleccionado] = true;
                alert("ASISTENCIA REGISTRADA : SI ASISTIO")
                siAsistio++;
            } else if (respuesta === "2") {
                asistencia[diaSeleccionado] = false;
                alert("SE REGISTRO ASISTENCIA : NO ASISTIO")
                noAsistio++;
            } else {
                alert("NO SE REGISTRO LA ASISTENCIA")
                continue; // vuelve al menú sin registrar nada
            }

        // Si selecciona sábado o domingo, se informa que no hay clases
        } else if (diasSemana > 5 && diasSemana < 8) {
            alert("HOY NO HAY CLASES")
        } else {
            alert("Ingrese una opción válida del 1 al 8.")
        }

    } while (true); // Bucle infinito hasta que se use 'break'
}

// 2. RESUMEN DE LA ASISTENCIA

function resumenAsistencia() {
    let resumen = "RESUMEN DE ASISTENCIA:\n\n";
    for (let dia in asistencia) { // Recorre cada día del objeto asistencia
        if (asistencia[dia] === true) {
            resumen += `${dia}: Asistió\n`;
        } else if (asistencia[dia] === false) {
            resumen += `${dia}: No asistió\n`;
        } else {
            resumen += `${dia}: No registrado\n`;
        }
    }
    alert(resumen); // Muestra el resumen en una alerta
}

// 3. MODIFICAR ASISTENCIA DE UN DÍA

function modificarAsistencia() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    do {
        // Menú para seleccionar día a modificar
        let dia = prompt(`Seleccione dia para modificar la aistencia\n
        1. LUNES                                          5. VIERNES\n
        2. MARTES                                         6. SÁBADO\n
        3. MIÉRCOLES                                      7. DOMINGO\n
        4. JUEVES                                         8. SALIR`);

        if (dia === null || dia === "8") break; // salir si cancela o selecciona salir

        dia = parseInt(dia);

        if (dia >= 1 && dia <= 5) {
            let diaNombre = dias[dia - 1];

            if (asistencia[diaNombre] === null) {
                alert(`${diaNombre} aún no tiene asistencia registrada.`);
                continue;
            }

            let nueva = prompt(`Nueva asistencia para ${diaNombre}:\n1. Sí asistió\n2. No asistió`);
            nueva = parseInt(nueva);

            // Si cambia de inasistencia a asistencia
            if (nueva === 1) {
                if (asistencia[diaNombre] === false) {
                    siAsistio++;
                    noAsistio--;
                }
                asistencia[diaNombre] = true;
                alert("Su asistencia se modificó a: Sí asistió");

            // Si cambia de asistencia a inasistencia
            } else if (nueva === 2) {
                if (asistencia[diaNombre] === true) {
                    siAsistio--;
                    noAsistio++;
                }
                asistencia[diaNombre] = false;
                alert("Su asistencia se modificó a: No asistió");
            } else {
                alert("Opción inválida.");
            }

        } else if (dia === 6 || dia === 7) {
            alert("HOY NO HAY CLASES");
        } else {
            alert("Ingrese una opción válida del 1 al 8.");
        }

    } while (true); // Sigue hasta que se use 'break'
}

// 4. MOSTRAR PORCENTAJE DE ASISTENCIA

function mostrarPorcentaje() {
    let porcentaje, porcentaje2;
    let total = 5; // Total de días hábiles

    // Cálculo de porcentajes
    porcentaje = (siAsistio / total) * 100;
    porcentaje2 = (noAsistio / total) * 100;

    // Muestra resultados
    alert(`        RESULDATOS DE SU ASISTENCIA :\n
        Su porcentaje de asistencia es del:  ${porcentaje}%\n
        Su porcentaje de inasistencia es del:  ${porcentaje2}%`)
}

// 5. REINICIAR REGISTRO SEMANAL

function reiniciarRegistro() {
    let confirmar = parseInt(prompt(`Estas seguro que quieres eliminar el registro:\n
        1.Si\n
        2.No`))

    if (confirmar === 1) {
        // Vuelve a colocar todos los valores de asistencia en null
        for (let dia in asistencia) {
            asistencia[dia] = null;
        }

        // Reinicia contadores
        siAsistio = 0;
        noAsistio = 0;

        alert("Eliminando registros....")
        alert("Registro de asistencia reiniciado correctamente");

    } else if (confirmar === 2) {
        alert("Reiniciar registro a sido cancelado")
    } else {
        alert("Opcion invalida")
    } 
}

// 6. MENÚ PRINCIPAL

function menuOpciones() {
    let option;
    do {
        // Menú principal con opciones numeradas
        option = prompt(`MENU DE OPCIONES:\n
            1. REGISTRAR ASISTENCIA DE UN DIA\n
            2. MOSTRAR RESUMEN DE ASISTENCIA\n
            3. MODIFICAR ASISTENCIA DE UN DIA\n
            4. MOSTAR PORCENTAJE DE ASISTENCIA\n
            5. REINICIAR REGISTRO SEMANAL\n
            6. SALIR`)

        // Ejecuta función según opción elegida
        switch (option) {
            case "1":
                registroAsistencia()
                break;
            case "2":
                resumenAsistencia()
                break;
            case "3":
                modificarAsistencia()
                break;
            case "4":
                mostrarPorcentaje()
                break;
            case "5":
                reiniciarRegistro()
                break;
            case "6":
                alert("Saliendo....")
                break;
            default:
                alert(`OPCION INVALIDA: INGRESE OTRA OPCION`)
        }
    } while (option !== "6"); // Repite hasta que elija salir
}

// Ejecuta el menú cuando se abre el programa
menuOpciones()
