function appMain() {
    // Array de notas de los alumnos
    const notas = [7.5, 8, 6, 9.2, 5, 4.8, 7.9, 6.5, 8.8, 3.2];

    // Calcular la nota media
    const notaMedia = calcularMedia(notas);

    // Calcular la nota mínima
    const notaMinima = calcularMinima(notas);

    // Calcular la nota máxima
    const notaMaxima = calcularMaxima(notas);

    // Contar el número de aprobados y suspensos
    const { aprobados, suspensos } = contarAprobadosSuspensos(notas);

    // Mostrar resultados en el HTML
    document.write("Nota media: " + notaMedia.toFixed(2) + "<br>");
    document.write("Nota mínima: " + notaMinima.toFixed(2) + "<br>");
    document.write("Nota máxima: " + notaMaxima.toFixed(2) + "<br>");
    document.write("Número de aprobados: " + aprobados + "<br>");
    document.write("Número de suspensos: " + suspensos + "<br>");
}

function calcularMedia(notas) {
    const total = notas.reduce((a, b) => a + b, 0);
    return total / notas.length;
}

function calcularMinima(notas) {
    return Math.min(...notas);
}

function calcularMaxima(notas) {
    return Math.max(...notas);
}

function contarAprobadosSuspensos(notas) {
    let aprobados = 0;
    let suspensos = 0;

    for (const nota of notas) {
        if (nota >= 5) {
            aprobados++;
        } else {
            suspensos++;
        }
    }

    return { aprobados, suspensos };
}
