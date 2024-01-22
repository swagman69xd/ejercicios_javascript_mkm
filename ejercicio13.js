function procesarCadenas() {
    // Obtener el valor de nombre y apellidos
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;

    // Convertir nombre a mayúsculas
    const nombreMayusculas = nombre.toUpperCase();

    // Combinar nombre y apellidos
    const nombreCompleto = nombre + " " + apellidos;

    // Mostrar resultado en el HTML
    document.getElementById("mayusculas").textContent = nombreMayusculas;
    document.getElementById("fullName").textContent = nombreCompleto;
}
