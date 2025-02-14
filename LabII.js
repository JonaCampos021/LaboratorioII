
function cambiarColor(elemento) {
    const colores = ["orange", "blue", "green", "yellow", "pink"];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    elemento.style.backgroundColor = colorAleatorio;
}

function mostrarMensaje(elemento, mensaje) {
    elemento.innerText = mensaje;
}


    function ocultarMensaje(elemento) {
        elemento.innerText = "Las Pupusas";
    }

    function cambiarTexto(elemento) {
        elemento.innerText = "Las Aventuras de Merlin";
    }

    function agrandarTexto(elemento) {
        elemento.style.fontSize = "24px";
    }

    function restaurarTexto(elemento) {
        elemento.style.fontSize = "18px";
    }

    function mostrarAlerta(event) {
        event.preventDefault();
        alert("Cristiano Ronaldo");
    }

    function cambiarBorde(elemento) {
        elemento.style.border = "5px solid blue";
    }
