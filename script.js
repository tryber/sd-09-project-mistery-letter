const buttonCreateText = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textResult = document.getElementById('carta-gerada');

function addText() {
  let word = textInput.value.split(' ');
  for (let index in word) {
    const newWord = document.createElement('span');
    newWord.className = 'teste';
    newWord.innerText += `${word[index]} `;
    textResult.appendChild(newWord);
  }
}

window.onload = function init() {
  buttonCreateText.addEventListener('click', addText);
}
