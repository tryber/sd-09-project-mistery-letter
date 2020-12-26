const createBtn = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textParagraph = document.getElementById('carta-gerada');

function createSpanFromWord(word) {
  const wordSpan = document.createElement('span');
  wordSpan.textContent = word;
  return wordSpan;
}

function createMisteryLetter() {
  const inputTextArray = textInput.value.split(' ');
  for (let index = 0; index < inputTextArray.length; index += 1) {
    const word = inputTextArray[index];
    const wordSpan = createSpanFromWord(word);
    textParagraph.appendChild(wordSpan);
  }
}

function setCreateBtnEvent() {
  createBtn.addEventListener('click', createMisteryLetter);
}

window.onload = function () {
  setCreateBtnEvent();
}
