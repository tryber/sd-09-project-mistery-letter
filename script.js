const message = document.getElementById('carta-texto');
const createBtn = document.getElementById('criar-carta');
const letter = document.getElementById('carta-gerada');
const wordCount = document.getElementById('carta-contador');
const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateleft'];
const inclination = ['skewleft', 'skewright'];

function destroyLetter() {
  letter.innerText = '';
  while (letter.children.length > 0) {
    letter.removeChild(letter.children[letter.children.length - 1]);
  }
  wordCount.innerText = '';
}

function wordArt(word) {
  word.className = '';
  word.classList.add(style[Math.ceil(Math.random() * style.length) - 1]);
  word.classList.add(size[Math.ceil(Math.random() * size.length) - 1]);
  word.classList.add(rotation[Math.ceil(Math.random() * rotation.length) - 1]);
  word.classList.add(inclination[Math.ceil(Math.random() * inclination.length) - 1]);
}

function counter() {
  wordCount.innerText = letter.children.length;
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
    wordArt(span);
    letter.appendChild(span);
  }
  counter();
}

createBtn.addEventListener('click', createLetter);

function wordUpdate(event) {
  wordArt(event.target);
}

letter.addEventListener('click', wordUpdate);
