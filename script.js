function getLetterTyped() {
  const cartaTextoInput = document.querySelector('#carta-texto');
  return cartaTextoInput.value;
}

function trasnformLetterToArray(letter) {
  const letterArray = letter.split(' ');
  return letterArray;
}

function tranformArrayTextSpan(letterArray) {
  const cartaGerada = document.querySelector('#carta-gerada');
  for (word of letterArray) {
    const wordSpan = document.createElement('span');
    wordSpan.innerText = word;
    cartaGerada.appendChild(wordSpan);
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
  const letterArray = trasnformLetterToArray(letterText);
  letterText = trasnformLetterToArray(letterText);
  destroySpanLetter();
  tranformArrayTextSpan(letterText);
}

function listeners() {
  const criarCartaButton = document.querySelector('#criar-carta');
  criarCartaButton.addEventListener('click', generateLetter);
}

window.onload = function () {
  listeners();
}
