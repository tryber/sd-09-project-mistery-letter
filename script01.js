const styleClass = ['magazine1', 'magazine2', 'newspaper'];
const sizesClass = ['medium', 'big', 'reallybig'];
const rotationsClass = ['rotateleft', 'rotateright'];
const skewClass = ['skewleft', 'skewright'];
const groups = ['styleClass', 'sizesClass', 'rotationsClass', 'skewClass'];

function removeMensage() {
  const span = document.querySelectorAll('span');
  for (let index = 0; index < span.length; index += 1) {
    const spanDelete = span[index];
    spanDelete.remove();
  }
}

//Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Gerando_um_n%C3%BAmero_inteiro_aleat%C3%B3rio_entre_dois_valores

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(groups.length)

function randomWord(origin) {
  const word = origin.target;
  randomClass(word, styleClass);
}

function randomClass(mensage, arrayClass) {
  getRandomInt(2, groups);

  const classN = arrayClass[Math.floor(Math.random() * arrayClass.length)];
  mensage.classList.add(classN);
}

function createSpan(mensageClear) {
  const father = document.querySelector('#carta-gerada');
  const mensageSpan = document.createElement('span');
  mensageSpan.innerText = `${mensageClear}`;
  mensageSpan.addEventListener('click', randomWord)
  father.appendChild(mensageSpan);
  randomClass(mensageSpan, styleClass);
  randomClass(mensageSpan, sizesClass);
  randomClass(mensageSpan, rotationsClass);
  randomClass(mensageSpan, skewClass);
}

function createMensage() {
  const father = document.querySelector('#carta-gerada');
  const inputMensage = document.querySelector('#carta-texto');
  const counter = document.querySelector('#carta-contador')
  let mensage = inputMensage.value.trim();
  counter.innerText = 0;
  let mensageClear = '';
  father.innerText = '';
  removeMensage();
  if (mensage !== '') {
    for (let index = 0; index < mensage.length; index += 1) {
      if (mensage[index] !== ' ') {
        mensageClear += mensage[index];
      } else {
        createSpan(mensageClear)
        mensageClear = '';
        
      }
    }
    createSpan(mensageClear);
    counter.innerText = father.childElementCount;
  } else {
    father.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

const buttonCreate = document.querySelector('#criar-carta');
buttonCreate.addEventListener('click', createMensage);
