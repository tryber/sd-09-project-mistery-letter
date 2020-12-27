const inputField = document.querySelector('#carta-texto');
const textContainer = document.querySelector('#carta-gerada');

function appendRandomClass() {
  const styleClasses = ['newspaper', 'magazine1', 'magazine2'];
  const sizeClasses = ['medium', 'big', 'reallybig'];
  const rotateClasses = ['rotateleft', 'rotateright'];
  const skewClasses = ['skewleft', 'skewright'];
}

function letterCounter() {
  const wordCounter = document.querySelector('#carta-contador');
  const letter = document.querySelectorAll('span');
  wordCounter.innerText = `${letter.length} words`;
}

function generateLetter() {
  const phrase = inputField.value.split(' ');
  for (let index = 0; index < phrase.length; index += 1) {
    const word = document.createElement('span');
    // word.classList = appendRandomClass();
    word.innerText = phrase[index];
    textContainer.appendChild(word);
    textContainer.innerHTML += ' ';
  }
  letterCounter();
}

function checkInputValue() {
  if (inputField.value.length > 0) {
    generateLetter();
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
}

window.onload = function () {
  const inputButton = document.querySelector('#criar-carta');
  inputButton.addEventListener('click', checkInputValue);
};
