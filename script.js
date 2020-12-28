function generateLetter() {
  const input = document.querySelector('#carta-texto');
  const letterText = document.querySelector('#carta-gerada');
  const counter = document.querySelector('#carta-contador');
  const phrase = input.value.split(' ');
  letterText.innerText = '';
  if (input.value.trim() === '') {
    letterText.innerText = 'Por favor, digite o conteúdo da carta.';
    counter.innerText = 0;
  } else {
    for (let index = 0; index < phrase.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = phrase[index];
      letterText.appendChild(word);
    }
    counter.innerText = letterText.children.length;
  }
}

window.onload = function () {
  const inputButton = document.querySelector('#criar-carta');
  inputButton.addEventListener('click', generateLetter);
};
