const createBtn = document.getElementById('criar-carta');
const textInput = document.getElementById('carta-texto');
const textParagraph = document.getElementById('carta-gerada');
const styleClasses = {
  groups: ['styles', 'sizes', 'rotations', 'skews'],
  styles: ['newspaper', 'magazine1', 'magazine2'],
  sizes: ['medium', 'big', 'reallybig'],
  rotations: ['rotateleft', 'rotateright'],
  skews: ['skewleft', 'skewright'],
};

function randomNumberInInterval(minValue, maxValue) {
  // Reference: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
}

function getRandomItemsFromArray(quantity, array) {
  const outputArray = [];
  for (let index = 1; index <= quantity; index += 1) {
    let item = array[randomNumberInInterval(0, array.length)];
    while (outputArray.includes(item)) {
      item = array[randomNumberInInterval(0, array.length)];
    }
    outputArray.push(item);
  }
  return outputArray;
}

function getRandomClassesStr() {
  const classesArray = [];
  const groupsQuantity = randomNumberInInterval(2, styleClasses.groups.length);
  const styleGroups = getRandomItemsFromArray(groupsQuantity, styleClasses.groups);
  for (let index = 0; index < styleGroups.length; index += 1) {
    const key = styleGroups[index];
    const classGroup = styleClasses[key];
    const className = getRandomItemsFromArray(1, classGroup)[0];
    classesArray.push(className);
  }
  return classesArray.join(' ');
}

function getSpanFromWord(word) {
  const wordSpan = document.createElement('span');
  wordSpan.textContent = word;
  wordSpan.className = getRandomClassesStr();
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
    textParagraph.innerHTML = '';
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
