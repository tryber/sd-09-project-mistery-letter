const cartaTexto = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaContador = document.querySelector('#carta-contador');

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

// Tentativa 2
// const cartaTexto = document.querySelector('#carta-texto');
// const criarCarta = document.querySelector('#criar-carta');
// const cartaGerada = document.querySelector('#carta-gerada');
// const cartaContador = document.querySelector('#carta-contador');

// const groups = {
//   style: ['newspaper', 'magazine1', 'magazine2'],
//   size: ['medium', 'big', 'realybig'],
//   rotate: ['rotateleft', 'rotateright'],
//   skew: ['skewleft', 'skewright']
// }

// function randomNumber(number) {
//   let random = Math.floor(Math.random() * number);
//   return random;
// }
// console.log(randomNumber(Object.keys(groups).length));

// function shuffle(array) {
//   let remainItem = array.length, t, i;
//   while (remainItem) {
//     i = Math.floor(Math.random() * (remainItem -= 1));
//     t = array[remainItem];
//     array[remainItem] = array[i];
//     array[i] = t;
//   }
//   return array;
// }
// console.log(shuffle(Object.keys(groups)));
// let test = shuffle(Object.keys(groups)[randomNumber(Object.keys(groups).length)]);
// console.log(test);

// function creatingLetter() {
//   const wordArray = cartaTexto.value.split(' ');

//   for (let index = 0; index < wordArray.length; index += 1) {
//     if (wordArray[index] !== '') {
//       const span = document.createElement('span');
//       span.style.display = 'inline-block';
//       span.innerText = wordArray[index];
//       cartaGerada.appendChild(span);
//     }
//   }
//   validation();
// }
// criarCarta.addEventListener('click', creatingLetter);

// function validation() {
//   const spans = document.querySelectorAll('span');

//   if (spans.length === 0) {
//     cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
//   }
// }
