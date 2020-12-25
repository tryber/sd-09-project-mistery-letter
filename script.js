const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

function getStyleClasses() {
  const styles = {
    backGround: ['newspaper', 'magazine1', 'magazine2'],
    size: ['medium', 'big', 'reallybig'],
    rotation: ['rotateleft', 'rotateright'],
    inclination: ['skewleft', 'skewright'],
  };
  const values = Object.values(styles)
  return values;
}
getStyleClasses();

function valuesOfClasses() {
  let allValues = getStyleClasses();
  let all = [];
  for (let index = 0; index < allValues.length; index += 1) {
    all.push(allValues[index])
  }
  let string = all.toString();
  let space = string.replace(/,/g, ' ');
  return space;
}
const allClasses = valuesOfClasses();

function randomClassesThree() {
  const classesRandom = getStyleClasses();
  let randomThree = [];
  for (let index = 0; index < classesRandom.length; index += 1) {
    randomThree.push(classesRandom[index][Math.floor(Math.random() * 4)])
  }
  const arrayRandom = randomThree.toString();
  let spaces = arrayRandom.replace(/,/g, ' ');
  return spaces;
}
randomClassesThree();

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

function getWord(classe) {
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
        span.classList = classe
        paragraph.appendChild(span);
      }
    }
  });
}
getWord(allClasses);

function getClassesRandom() {
  button.addEventListener('click', function () {
    let tagSpan = document.getElementsByTagName('span');
    for (let index = 0; index < tagSpan.length; index += 1) {
      tagSpan[index].classList = randomClassesThree();
    }
  });
}
getClassesRandom();

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
