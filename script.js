const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const paragraph = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');

function two(randomTwo) {
  const twoRandom = Math.ceil(Math.random() * 2);
  return randomTwo[twoRandom];
}

function three(randomThree) {
  const threeRandom = Math.ceil(Math.random() * 3);
  return randomThree[threeRandom];
}

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
  let randomBackGround = Math.ceil(Math.random() * 3);
  let randomSize = Math.ceil(Math.random() * 3)
  let randomRotation = Math.ceil(Math.random() * 2)
  let randomInclination = Math.ceil(Math.random() * 2)
  classes.className += `${backGround[randomBackGround]} ${size[randomSize]} ${rotation[randomRotation]} ${inclination[randomInclination]}`; 
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
        span.className = 'text ';
        allClasses(span);
        paragraph.appendChild(span);
      }
    }
  });
}
getWord();

function wordCounter() {
  button.addEventListener('click', function () {
    const numberOfWords = document.querySelectorAll('.text');
    let counter = 1;
    for (let index = 0; index < numberOfWords.length; index += 1) {
      counter = [index + 1];
    }
    counter = parseInt(counter, 10);
    contador.innerHTML = counter;
  });
}
wordCounter();
