function buildMisteryLetter(texto) {
  const cartaGerada = document.querySelector('#carta-gerada');
  const splitText = texto.split(' ');
  for (let index = 0; index < splitText.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = splitText[index];
    cartaGerada.appendChild(span);
  }
}

function checkEmptyInput(texto) {
  if(texto === ' ' || '') {
    console.log(texto);
    const cartaGerada = document.querySelector('#carta-gerada');
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta';
  } else {
    buildMisteryLetter(texto);
  }
}

function receiveInput() {
  const cartaTexto = document.querySelector('#carta-texto');
  const texto = cartaTexto.value;
  texto.replace(/\s\s+/g, ' ');
  checkEmptyInput(texto);
}

function addEventListeners() {
  const criarCarta = document.querySelector('#criar-carta');
  criarCarta.addEventListener('click', receiveInput);
}

window.onload = function () {
  addEventListeners();
};
