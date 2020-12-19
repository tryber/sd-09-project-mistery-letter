// Seletores disponíveis separados em categorias
const stylesObject = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotation: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

// Embaralhar arrays
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    const temp = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

// Aplicação de estilos aleatórios
function randomClassTypes(object) {
  let randomAmountOfStylesMinus1 = Math.floor(Math.random() * Object.keys(object).length);
  const array = [];
  while (randomAmountOfStylesMinus1 >= 0) {
    let classTypeIndex = Math.floor(Math.random() * Object.keys(object).length);
    // Filtro para itens repetidos no array
    while (array.includes(classTypeIndex)) {
      classTypeIndex = Math.floor(Math.random() * Object.keys(object).length);
    }
    array.push(classTypeIndex);
    randomAmountOfStylesMinus1 -= 1;
  }
  return array;
}

function addStyle(styleTypesArray, object, element) {
  if (element.classList) {
    element.className = '';
  }
  for (let index = 0; index < styleTypesArray.length; index += 1) {
    const styleTypeIndex = styleTypesArray[index];
    const styleType = Object.values(object)[styleTypeIndex];
    const selectedClassType = shuffle(styleType)[0];
    element.classList.add(selectedClassType);
  }
}

function createRandomStyle() {
  // Recuperação dos spans onde os estilos serão aplicados
  const span = document.querySelectorAll('span');
  for (let spanIndex = 0; spanIndex < span.length; spanIndex += 1) {
    const word = span[spanIndex];
    addStyle(randomClassTypes(stylesObject), stylesObject, word);
  }
}

// Contador de palavras
function wordCount() {
  const spanCount = document.querySelectorAll('span');
  const letterInfoParagrah = document.querySelector('#carta-contador');
  letterInfoParagrah.innerText = `Total de palavras: ${spanCount.length}`;
}

// Cria texto da carta
function insertText(inputText, printedLetter) {
  if (inputText === 'Por favor, digite o conteúdo da carta.') {
    const newSpan = document.createElement('span');
    newSpan.innerText = inputText;
    printedLetter.appendChild(newSpan);
  } else {
    const arrayText = inputText.split(' ');
    for (let index = 0; index < arrayText.length; index += 1) {
      const newSpan = document.createElement('span');
      newSpan.innerText = arrayText[index];
      newSpan.addEventListener('click', () => addStyle(randomClassTypes(stylesObject), stylesObject, newSpan));
      printedLetter.appendChild(newSpan);
    }
    createRandomStyle();
  }
  wordCount();
}

function removeText(printedLetter) {
  while (printedLetter.innerHTML) {
    printedLetter.removeChild(printedLetter.firstChild);
  }
}

function importText(inputText) {
  const printedLetter = document.querySelector('#carta-gerada');
  if (printedLetter.innerHTML) {
    removeText(printedLetter);
  }
  insertText(inputText, printedLetter);
}

function createLetter() {
  const inputText = document.querySelector('#carta-texto');
  if (inputText.value.trim() === '') {
    importText('Por favor, digite o conteúdo da carta.');
  } else {
    importText(inputText.value);
  }
}

function createEvent() {
  // Importação pelo botão
  const createBtn = document.querySelector('#criar-carta');
  createBtn.addEventListener('click', createLetter);

  // Importação pela tecla enter
  const inputBox = document.querySelector('#carta-texto');
  inputBox.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
      createLetter();
    }
  });
}

createEvent();

// Links do Github e do LinkedIn
function socialMediaLink() {
  const githubIcon = document.querySelector('.fa-github');
  githubIcon.addEventListener('click', function () {
    window.open('https://github.com/rach-vp', '_blank');
  });
  const linkedinIcon = document.querySelector('.fa-linkedin');
  linkedinIcon.addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/raquel-pican%C3%A7o-384736107/', '_blank');
  });
}

socialMediaLink();
