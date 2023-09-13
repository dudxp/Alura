const controles = document.querySelectorAll("[data-controle]");

controles.forEach((element) => {
  element.addEventListener("click", (event) => {
    controladorPontos(event.target.dataset.controle, event.target.parentNode);
  });
});

function controladorPontos(operador, controle) {
  var peca = controle.querySelector("[data-contador]");

  if (operador === "-") {
    if (peca.value > 0) {
      peca.value = parseInt(peca.value) - 1;
    }
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}
