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

function selectStyleClasse(word) {
  const selectStyle = Math.ceil(Math.random() * 3);
  if (selectStyle === 1) word.classList.toggle('newspaper');
  if (selectStyle === 2) word.classList.toggle('magazine1');
  if (selectStyle === 3) word.classList.toggle('magazine2');
}

function selectSizeClasse(word) {
  const selectStyle = Math.ceil(Math.random() * 3);
  if (selectStyle === 1) word.classList.toggle('medium');
  if (selectStyle === 2) word.classList.toggle('big');
  if (selectStyle === 3) word.classList.toggle('reallybig');
}

function selectRotateClasse(word) {
  const selectStyle = Math.ceil(Math.random() * 2);
  if (selectStyle === 1) word.classList.toggle('rotateleft');
  if (selectStyle === 2) word.classList.toggle('rotateright');
}

function selectSkewClasse(word) {
  const selectStyle = Math.ceil(Math.random() * 2);
  if (selectStyle === 1) word.classList.toggle('skewleft');
  if (selectStyle === 2) word.classList.toggle('skewright');
}

function addClassesToSpan(word) {
  const selectTranform = Math.ceil(Math.random() * 2);
  selectStyleClasse(word);
  selectSizeClasse(word);
  if (selectTranform === 1) selectRotateClasse(word);
  if (selectTranform === 2) selectSkewClasse(word);
}

function addClassesToLetter() {
  const letterWords = document.querySelectorAll('span');
  for (let index = 0; index < letterWords.length; index += 1) {
    addClassesToSpan(letterWords[index]);
  }
}

function wordsCounter() {
  const words = document.querySelectorAll('span');
  const counterLetter = document.querySelector('#carta-contador');
  counterLetter.innerText = words.length;
}

function generateLetter() {
  destroySpanLetter();
  let letterText = getLetterTyped();
  letterText = trasnformLetterToArray(letterText);
  tranformArrayTextSpan(letterText);
  addClassesToLetter();
  wordsCounter();
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const spans = document.querySelectorAll('span');
  if (clickedElement === document.querySelector('#criar-carta')) generateLetter();
  for (let index = 0; index < spans.length; index += 1) {
    if (clickedElement === spans[index]) {
      addClassesToSpan(event.target);
    }
  }
});

// function listeners() {
//   const criarCartaButton = document.querySelector('#criar-carta');
//   criarCartaButton.addEventListener('click', generateLetter);
// }

window.onload = function () {
  // listeners();
};
