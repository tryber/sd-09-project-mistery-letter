const classesGroup = ['skew', 'rotate', 'sizes', 'style']; 
const classes = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  sizes: ['medium', 'big', 'reallybig'],
  rotate: ['rotateright', 'rotateleft'],
  skew: ['skewleft', 'skewright']
};

const validateInput = function (text) {
  const finalText = text.trim();
  if (finalText.length == 0) {
    return false;
  }
  return true;
};

const splitText = function (text) {
  const letter = text.split(' ');
  return letter;
};

const resetLetter = function () {
  const pElement = document.getElementById('carta-gerada');
  const hasChilds = pElement.hasChildNodes();
  if (hasChilds) {
    const spanElements = document.querySelectorAll('span') ;
    for (let index = 0; index < spanElements.length; index += 1) {
      pElement.removeChild(spanElements[index]);
    }
  }
};

const ramdomClassesGroup = function () {
  const chosenClassesGroup = [];
  const firstIndex = Math.floor(Math.random() * 4);
  let secondIndex;
  chosenClassesGroup.push(classesGroup[firstIndex]);
  do {
    secondIndex = Math.floor(Math.random() * 4);
  } while (firstIndex === secondIndex);
  chosenClassesGroup.push(classesGroup[secondIndex]);
  return chosenClassesGroup;
};

const ramdomClasses = function () {
  const chosenClassesGroup = ramdomClassesGroup();
  const chosenClasses = {};
  const index1 = Math.floor(Math.random() * classes[chosenClassesGroup[0]].length);
  const index2 = Math.floor(Math.random() * classes[chosenClassesGroup[1]].length);
  chosenClasses.classe1 = classes[chosenClassesGroup[0]][index1];
  chosenClasses.classe2 = classes[chosenClassesGroup[1]][index2];
  return chosenClasses;
};

function handleClickButton() {
  const inputText = document.getElementById('carta-texto').value;
  const pElement = document.getElementById('carta-gerada');
  const validInput = validateInput(inputText);
  resetLetter();
  if (validInput) {
    const letter = splitText(inputText);
    for (let index = 0; index < letter.length; index += 1) {
      const spanElement = document.createElement('span');
      const chosenClasses = ramdomClasses();
      spanElement.classList.add(chosenClasses.classe1, chosenClasses.classe2);
      spanElement.innerText = letter[index];
      pElement.appendChild(spanElement);
    }
  } else {
    const spanElement = document.createElement('span');
    spanElement.innerText = 'Por favor, digite o conteúdo da carta.';
    spanElement.className = 'warning';
    pElement.appendChild(spanElement);
  }
}

const createLetter = function () {
  const buttonElement = document.getElementById('criar-carta');
  buttonElement.addEventListener('click', handleClickButton);
};

window.onload = function () {
  createLetter();
};
