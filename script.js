const buttonCreateText = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textResult = document.getElementById('carta-gerada');

function addText() {
  if (textInput.value || textInput.value !== ' ') {
    const word = textInput.value.split(' ');
    for (let index in word) {
      const newWord = document.createElement('span');
      // newWord.className = 'teste';
      newWord.innerText += word[index];
      textResult.appendChild(newWord);
    }
  } else {
    const newWord = document.createElement('span');
    newWord.innerText = 'por favor, digite o conteúdo da carta.';
    textResult.appendChild(newWord);
  }
}

window.onload = function init() {
  buttonCreateText.addEventListener('click', addText);
};
