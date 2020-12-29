const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

function allClasses(classes) {
  const backGround = {
    1: 'newspaper',
    2: 'magazine1',
    3: 'magazine2',
  };
  const size = {
    1: 'medium',
    2: 'big',
    3: 'reallybig',
  };
  const rotation = {
    1: 'rotateleft',
    2: 'rotateright',
  };
  const inclination = {
    1: 'skewleft',
    2: 'skewright',
  };
  const randomBackGround = Math.ceil(Math.random() * 3);
  const randomSize = Math.ceil(Math.random() * 3);
  const randomRotation = Math.ceil(Math.random() * 2);
  const randomInclination = Math.ceil(Math.random() * 2);
  classes.className += `${size[randomSize]} ${rotation[randomRotation]}`;
  classes.className += ` ${backGround[randomBackGround]} ${size[randomSize]} ${rotation[randomRotation]} ${inclination[randomInclination]}`;
  classes.className += ` ${rotation[randomRotation]} ${inclination[randomInclination]} ${backGround[randomBackGround]} ${size[randomSize]}`;
}

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
        allClasses(span);
        paragraph.appendChild(span);
      }
    }
  });
}
getWord();

function wordCounter() {
  button.addEventListener('click', function () {
    const numberOfWords = document.querySelector('#carta-gerada');
    contador.innerHTML = numberOfWords.childElementCount;
  });
}
wordCounter();
