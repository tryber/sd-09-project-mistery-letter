const input = document.querySelector('#carta-texto');
const button = document.querySelector('#criar-carta');
const letter = document.querySelector('#carta-gerada');
let splitInput = '';

function createLetter() {
  const spans = letter.children.length;
  if (spans > 0) {
    for (let index = 0; index < spans; index += 1) {
      const child = letter.children[0];
      letter.removeChild(child)
    }
  }
  splitInput = input.value.split(' ');
  for (let index = 0; index < splitInput.length; index += 1) {
    const spanCreate = document.createElement('span');
    spanCreate.innerText = splitInput[index];
    letter.appendChild(spanCreate);
  }
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
