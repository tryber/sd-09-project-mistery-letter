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
    return console.log('Por favor, digite o conteúdo da carta.');
  }

  for (let index = 0; index < spans.length; index += 1) {
    for (item of randomClass()) {
      spans[index].classList.add(item);
    }
  }
}
