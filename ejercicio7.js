
function appMain() {
    var n = prompt("Introduce el número de elementos de la serie de Fibonacci que deseas ver:");
    var fibonacciSequence = generateFibonacci(n);
    document.getElementById("salida").innerText = fibonacciSequence.join(" ");
}

function generateFibonacci(n) {
    var sequence = [1, 1];
    for (var i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
