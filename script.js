const createBtn = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textParagraph = document.getElementById('carta-gerada');

function getSpanFromWord(word) {
  const wordSpan = document.createElement('span');
  wordSpan.textContent = word;
  return wordSpan;
}

function createSpansFromText(inputText) {
  const textArray = inputText.split(' ');
  for (let index = 0; index < textArray.length; index += 1) {
    const word = textArray[index];
    const wordSpan = getSpanFromWord(word);
    textParagraph.appendChild(wordSpan);
  }
}

function createMisteryLetter() {
  // Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
  const cleanInputText = textInput.value.trim();
  const textNotBlank = (cleanInputText !== '');
  if (textNotBlank) {
    createSpansFromText(cleanInputText);
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
}

function setCreateBtnEvent() {
  createBtn.addEventListener('click', createMisteryLetter);
}

window.onload = function () {
  setCreateBtnEvent();
};
