const input = document.querySelector('#carta-texto');
const letterText = document.querySelector('#carta-gerada');
const error = 'Por favor, digite o conteúdo da carta.';

const styleClasses = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright']
];

function letterCounter() {
  const wordCounter = document.querySelector('#carta-contador');
  const letter = document.querySelectorAll('span');
  wordCounter.innerText = letter.length;
}

function generateLetterText() {
  const phrase = input.value.split(' ');
  for (let index = 0; index < phrase.length; index += 1) {
    const word = document.createElement('span');
    word.innerText = phrase[index];
    letterText.appendChild(word);
    letterText.innerHTML += ' ';
  }
}

function generateLetter() {
  if (checkInputValue() === true) {
    generateLetterText();
    letterCounter();
  } else {
    letterText.innerHTML = error;
  }
}

function checkInputValue() {
  let check = false;
  if (input.value.trim().length > 0 && letterText.innerText === error) {
    letterText.innerText = '';
    check = true;
  } else if (input.value.trim().length > 0 && letterText.innerText !== error) {
    check = true;
  }
  return check;
}

window.onload = function () {
  const inputButton = document.querySelector('#criar-carta');
  inputButton.addEventListener('click', generateLetter);
};
