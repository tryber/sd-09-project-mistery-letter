// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
function checkInputContent(letter) {
  const cartaGerada = document.querySelector('#carta-gerada');
  const cartaTextoInput = document.querySelector('#carta-texto');
  if (!letter.value.trim()) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    cartaTextoInput.value = '';
  }
    return letter.value;
}

function getLetterTyped() {
  const cartaTextoInput = document.querySelector('#carta-texto');
  cartaTextoInput.value = checkInputContent(cartaTextoInput);
  return cartaTextoInput.value;
}

function trasnformLetterToArray(letter) {
  const letterArray = letter.split(' ');
  return letterArray;
}

function tranformArrayTextSpan(letterArray) {
  const cartaGerada = document.querySelector('#carta-gerada');
  for (const word of letterArray) {
    if (word) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = word;
      cartaGerada.appendChild(wordSpan);
    }
  }
}

function destroySpanLetter() {
  const cartaGerada = document.querySelector('#carta-gerada');
  cartaGerada.innerHTML = '';
}

function generateLetter() {
  destroySpanLetter();
  let letterText = getLetterTyped();
  letterText = trasnformLetterToArray(letterText);
  tranformArrayTextSpan(letterText);
}

function listeners() {
  const criarCartaButton = document.querySelector('#criar-carta');
  criarCartaButton.addEventListener('click', generateLetter);
}

window.onload = function () {
  listeners();
};
