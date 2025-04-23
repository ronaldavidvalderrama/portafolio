
const texto = '"Apasionado por el código limpio y las soluciones elegantes."';
const status = document.getElementById("status");
let i = 0;

  function escribirTexto() {
    if (i < texto.length) {
      status.textContent += texto.charAt(i);
      i++;
      setTimeout(escribirTexto, 50); // Velocidad (milisegundos)
    }
  }

window.addEventListener("load", escribirTexto); // Inicia al cargar la página

