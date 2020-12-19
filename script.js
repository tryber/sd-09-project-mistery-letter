// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
function checkInputContent(letter) {
  if (letter.value === '') alert('Por favor, digite o conteúdo da carta');
  else if (letter.length === 0 || !letter.value.trim()) alert('Por favor, digite o conteúdo da carta');
}

function getLetterTyped() {
  const cartaTextoInput = document.querySelector('#carta-texto');
  checkInputContent(cartaTextoInput);
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
  const wordSpans = document.querySelectorAll('span');
  for (word of wordSpans) {
    cartaGerada.removeChild(word);
  }
}

function generateLetter() {
  let letterText = getLetterTyped();
  letterText = trasnformLetterToArray(letterText);
  destroySpanLetter();
  tranformArrayTextSpan(letterText);
  console.log(letterText);
}

function listeners() {
  const criarCartaButton = document.querySelector('#criar-carta');
  criarCartaButton.addEventListener('click', generateLetter);
}

window.onload = function () {
  listeners();
}
