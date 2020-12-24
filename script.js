const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

function getStyleClasses() {
  let styles = {
    backGround: ['newspaper', 'magazine1', 'magazine2'],
    size: ['medium', 'big', 'reallybig'],
    rotation: ['rotateleft', 'rotateright'],
    inclination: ['skewleft', 'skewright'],
  }
  let allStyles = Object.values(styles);
    return allStyles;
}
let allClasses = getStyleClasses();

function randomClasses(classes) {
  let randomClasse = classes;
  let allStyleClasses = [];
  for (let value of randomClasse) {
    allStyleClasses.push(value[Math.floor(Math.random() * value.length)]);
  }
  const arrayToSting = allStyleClasses.join(' ');
  return arrayToSting;
}
randomClasses(allClasses);

function errorMessage() {
  const spanMessage = document.createElement('span');
  button.addEventListener('click', function () {
    const inputContent = input.value;
    paragraph.appendChild(spanMessage);
    spanMessage.id = 'error-message';
    if (inputContent.match(/^\s*$/)) { // Nada ou espaço vazio
      spanMessage.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      const getSpan = document.querySelector('#error-message');
      getSpan.parentNode.removeChild(getSpan);
    }
  });
}
errorMessage();

function getWord() {
  button.addEventListener('click', function () {
    const wordString = (input.value);
    if (!wordString.match(/^\s*$/)) {
      while (paragraph.firstChild) {
        paragraph.removeChild(paragraph.lastChild);
      }
      const wordsArray = wordString.split(' ');
      for (let index = 0; index < wordsArray.length; index += 1) {
        const span = document.createElement('span');
        span.innerHTML = wordsArray[index];
        span.className = `text ${randomClasses(allClasses)}`;
        paragraph.appendChild(span);
      }
    }
  });
}
getWord();

function wordCounter() {
  button.addEventListener('click', function () {
    const numberOfWords = document.querySelectorAll('.text');
    for (let index = 0; index < numberOfWords.length; index += 1) {
      let number = [index + 1];
      number = parseInt(number, 10);
      contador.innerHTML = number;
    }
  });
}
wordCounter();
