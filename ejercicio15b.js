
function appMain() {
    // Ejemplo de array de notas
    const notas = [7, 5.5, 8, 3, 9.5, 4.5, 6];

    // Calculando la nota media
    const notaMedia = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    // Calculando la nota mínima
    const notaMinima = notas.reduce((min, nota) => (nota < min ? nota : min), notas[0]);

    // Calculando la nota máxima
    const notaMaxima = notas.reduce((max, nota) => (nota > max ? nota : max), notas[0]);

    // Calculando el número de aprobados
    const numAprobados = notas.filter(nota => nota >= 5).length;

    // Calculando el número de suspensos
    const numSuspensos = notas.filter(nota => nota < 5).length;

    // Mostrar resultados
    console.log(`Nota Media: ${notaMedia}`);
    console.log(`Nota Mínima: ${notaMinima}`);
    console.log(`Nota Máxima: ${notaMaxima}`);
    console.log(`Número de Aprobados: ${numAprobados}`);
    console.log(`Número de Suspensos: ${numSuspensos}`);
}
