
function appMenu() {
    let opcion;
    do {
        opcion = parseInt(prompt(
            "Menú:\n" +
            "-----\n" +
            "1. Sumar\n" +
            "2. Restar\n" +
            "3. Multiplicar\n" +
            "4. Dividir\n" +
            "\n" +
            "0. Salir\n" +
            "\n" +
            "Introduzca opción:"
        ), 10);

        switch (opcion) {
            case 1:
                realizarOperacion('sumar');
                break;
            case 2:
                realizarOperacion('restar');
                break;
            case 3:
                realizarOperacion('multiplicar');
                break;
            case 4:
                realizarOperacion('dividir');
                break;
            case 0:
                alert("Saliendo de la calculadora.");
                break;
            default:
                alert("Opción no válida.");
        }
    } while (opcion !== 0);
}

function realizarOperacion(operacion) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = num1 + num2;
            break;
        case 'restar':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                alert('No se puede dividir por cero.');
                return;
            }
            break;
    }

    alert("El resultado de " + operacion + " es: " + resultado);
}
