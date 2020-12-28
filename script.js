const cartaTexto = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaContador = document.querySelector('#carta-contador');

const classes = [['newspaper', 'magazine1', 'magazine2'], ['medium', 'big', 'reallybig'], ['rotateleft', 'rotateright'], ['skewleft', 'skewright']];
function shuffle() {
  let remainItem = classes.length, t, i;
  while (remainItem) {
    i = Math.floor(Math.random() * (remainItem -= 1));
    t = classes[remainItem];
    classes[remainItem] = classes[i];
    classes[i] = t;
  }
  return classes;
}

function randomClass() {
  const classesToAply = [];

  const numberOfGroups = shuffle().length;
  const groups = Math.floor(Math.random() * numberOfGroups);

  for (let index = 0; index <= groups; index += 1) {
    const numberOfClasses = shuffle()[index].length;
    const chosenClasses = Math.floor(Math.random() * numberOfClasses);
    classesToAply.push(shuffle()[index][chosenClasses]);
  }
  return classesToAply;
}

function aplyClasses() {
  const spans = document.querySelectorAll('span');
  if (spans.length === 0) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    return;
  }

  for (let index1 = 0; index1 < spans.length; index1 += 1) {
    const classesReference = randomClass();
    for (let index2 = 0; index2 < classesReference.length; index2 += 1) {
      spans[index1].classList.add(classesReference[index2]);
    }
  }
}

function deleteLetter() {
  const letter = document.querySelectorAll('span');
  for (let item = 0; item < letter.length; item += 1) {
    if (letter[item].parentNode) {
      letter[item].parentNode.removeChild(letter[item]);
    }
  }
}

function gerarCarta() {
  const words = cartaTexto.value.split(' ');

  deleteLetter();

  for (let index = 0; index < words.length; index += 1) {
    if (words[index] !== '') {
      const span = document.createElement('span');
      span.innerText = words[index];
      span.style.display = 'inline-block';
      cartaGerada.appendChild(span);
      cartaContador.innerText = words.length;
    }
  }
  aplyClasses();
}

criarCarta.addEventListener('click', gerarCarta);

function changingWordClass(span) {
  if (span.classList.contains('carta-gerada')) {
    return;
  }

  const classesReference = randomClass();
  let addClasses = '';

  for (let index = 0; index < classesReference.length; index += 1) {
    addClasses += ` ${classesReference[index]}`;
  }
  span.className = addClasses;
}

cartaGerada.addEventListener('click', (event) => {
  changingWordClass(event.target);
});
