const message = document.getElementById('carta-texto');
const createBtn = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');

function destroyLetter() {
  letter.innerText = '';
  while (letter.children.length > 0) {
    letter.removeChild(letter.children[letter.children.length - 1]);
  }
}

function createLetter() {
  const text = message.value.replace(/\s/g, '');
  const helper = message.value.split(' ');
  destroyLetter();
  if (text === '') {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  for (let index = 0; index < helper.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = helper[index];
    letter.appendChild(span);
  }
}

createBtn.addEventListener('click', createLetter);
