function addEventListeners() {
  const criarCarta = document.querySelector('#criar-carta');
  criarCarta.addEventListener('click', createLetter);
}

function createLetter() {
  const cartaTexto = document.querySelector('#carta-texto');
  const texto = cartaTexto.value;
}

window.onload = function () {
  addEventListeners();
};
