let numeroSecreto = Math.floor(Math.random() * 11); // Número aleatorio entre 0 y 10
let intentos = parseInt(prompt('Introduce el número de intentos: '), 10);
document.getElementById("intentos").innerText = intentos;

function verificarNumero() {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value, 10);
    
    // Validar si el número introducido es válido
    if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
        alert("Por favor, introduce un número válido entre 0 y 10.");
        return;
    }

    // Comprobar si el número es correcto
    if (numeroUsuario === numeroSecreto) {
        document.getElementById("resultado").innerText = "¡Correcto! El número secreto es " + numeroSecreto;
        return;
    } else {
        intentos--;
        document.getElementById("intentos").innerText = intentos;
        if (intentos <= 0) {
            document.getElementById("resultado").innerText = "Lo siento, no te quedan más intentos. El número secreto era " + numeroSecreto;
            return;
        } else {
            document.getElementById("resultado").innerText = "Incorrecto. Intenta de nuevo.";
        }
    }
}

