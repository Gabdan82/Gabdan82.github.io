function encriptar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Solo permite letras minúsculas y espacios
    return regex.test(texto);
}

function encriptarTexto() {
    const texto = document.getElementById("texto").value;
    if (!validarTexto(texto)) {
        alert("No están permitidas letras mayúsculas ni caracteres especiales");
        return;
    }
    const resultado = encriptar(texto);
    document.getElementById("resultado").innerText = resultado;
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value;
    if (!validarTexto(texto)) {
        alert("No están permitidas letras mayúsculas ni caracteres especiales");
        return;
    }
    const resultado = desencriptar(texto);
    document.getElementById("resultado").innerText = resultado;
}

function copiarTexto() {
    const resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

function limpiarTexto() {
    document.getElementById("texto").value = '';

    // Reiniciar el contenido de #resultado al estado original
    document.getElementById("resultado").innerHTML = `
        <p id="mensaje"><strong>Ningún mensaje fue encontrado</strong></p> 
        <p id="IngresaTexto">Ingresa el texto que quieres encriptar o desencriptar</p>
    `;
}
