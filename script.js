const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
const contador = document.querySelector('#carta-contador');
let splitInput = '';
const classes = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  inclined: ['skewleft', 'skewright'],
};

function removeLetter() {
  const spans = letter.children.length;
  if (spans > 0) {
    for (let index = 0; index < spans; index += 1) {
      const child = letter.children[0];
      letter.removeChild(child);
    }
  }
}

function randomize(spanCreate) {
  spanCreate.classList.add(classes.style[Math.round(Math.random() * 2)]);
  spanCreate.classList.add(classes.size[Math.round(Math.random() * 2)]);
  spanCreate.classList.add(classes.rotate[Math.round(Math.random() * 1)]);
  spanCreate.classList.add(classes.inclined[Math.round(Math.random() * 1)]);
  letter.appendChild(spanCreate);
}

function createLetter() {
  let cont = 0;
  removeLetter();
  splitInput = input.value.split(' ');
  for (let index = 0; index < splitInput.length; index += 1) {
    if (splitInput[index] !== '') {
      const spanCreate = document.createElement('span');
      spanCreate.innerText = splitInput[index];
      randomize(spanCreate);
      cont += 1;
    }
  }
  contador.innerText = cont;
}

function testInput() {
  if (input.value === '' || input.value[0] === ' ') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    letter.innerText = '';
    createLetter();
  }
}

function buttonCreate() {
  button.addEventListener('click', testInput);
}

buttonCreate();
