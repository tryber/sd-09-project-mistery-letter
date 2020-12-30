function three(random) {
  let randomThree = Math.floor(Math.random() * 3);
  return random[randomThree];
}

function two(random) {
  let randomTwo = Math.floor(Math.random() * 2);
  return random[randomTwo];
}

function allClasses(classes) {
  const style = ['newspaper', 'magazine1', 'magazine2',];
  const size = ['medium', 'big', 'reallybig',];
  const rotation = ['rotateleft', 'rotateright',];
  const inclination = ['skewleft', 'skewright',]
  classes.className = `${three(style)} ${three(size)} ${two(rotation)} ${two(inclination)}`;
}

function getWord() {
  const paragraph = document.querySelector('#carta-gerada');
  const input = document.querySelector('#carta-texto');
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
}
getWord();

function errorMessage() {
  const input = document.querySelector('#carta-texto');
  const button = document.querySelector('#criar-carta');
  const paragraph = document.querySelector('#carta-gerada');
  button.addEventListener('click', function () {
    const inputContent = input.value;
    if (inputContent.match(/^\s*$/)) { // Nada ou espaço vazio
      paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
     getWord();
    }
  });
}
errorMessage();

function wordCounter() {
  const contador = document.querySelector('#carta-contador');
  const button = document.querySelector('#criar-carta');
  button.addEventListener('click', function () {
    const numberOfWords = document.querySelector('#carta-gerada');
    contador.innerHTML = numberOfWords.childElementCount;
  });
}
wordCounter();
