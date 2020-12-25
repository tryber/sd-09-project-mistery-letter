const cartaTexto = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');

function gerarCarta() {
  const words = cartaTexto.value.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    if (words[index] !== '') {
      const span = document.createElement('span');
      span.innerText = words[index];
      cartaGerada.appendChild(span);
    }
  }
  aplyClasses();
}

criarCarta.addEventListener('click', gerarCarta);

function randomClass() {
  const classes = [['newspaper', 'magazine1', 'magazine2'], ['medium', 'big', 'reallybig'], ['rotateleft', 'rotateright'], ['skewleft', 'skewright']];
  const classesToAply = [];

  const numberOfGroups = classes.length;
  const groups = Math.floor(Math.random() * numberOfGroups);

  for (let index = 0; index <= groups; index += 1) {
    const numberOfClasses = classes[index].length;
    const chosenClasses = Math.floor(Math.random() * numberOfClasses);
    classesToAply.push(classes[index][chosenClasses]);
  }
  return classesToAply;
}

function aplyClasses() {
  const spans = document.querySelectorAll('span');
  if (spans.length === 0) {
    return cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  for (let index1 = 0; index1 < spans.length; index1 += 1) {
    const classesReference = randomClass();
    for (let index2 = 0; index2 < classesReference.length; index2 += 1) {
      spans[index1].classList.add(classesReference[index2]);
    }
  }
}

function changingWordClass(span) {
  const classesReference = randomClass();
  let addClasses = '';

  for (let index = 0; index < classesReference.length; index += 1) {
    addClasses += ` ${classesReference[index]}`;
  }
  span.className = addClasses;
}

cartaGerada.addEventListener('click', (event) => {
  changingWordClass(event.target);
})
