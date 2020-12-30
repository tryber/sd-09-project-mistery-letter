const father = document.querySelector('#carta-gerada');
const inputMensage = document.querySelector('#carta-texto');
const counter = document.querySelector('#carta-contador')
const buttonCreate = document.querySelector('#criar-carta');

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

function randomClass(mensage, arrayClass) {
  const classN = arrayClass[Math.floor(Math.random() * arrayClass.length)];
  mensage.classList.add(classN);
}

function createSpan(mensageClear) {
  const mensageSpan = document.createElement('span');
  mensageSpan.innerText = `${mensageClear}`;
  father.appendChild(mensageSpan);

  randomClass(mensageSpan, styleClass);
  randomClass(mensageSpan, sizesClass);
  randomClass(mensageSpan, rotationsClass);
  randomClass(mensageSpan, skewClass);
}

//Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
//Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function createMensage() {
  const mensage = inputMensage.value.split(' ');
  counter.innerText = 0;
  father.innerText = '';
  removeMensage();
  if (inputMensage.value.trim() !== '') {
    for (let index = 0; index < mensage.length; index += 1) {
      createSpan(mensage[index]);
    }
    counter.innerText = father.childElementCount;
  } else {
    father.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

buttonCreate.addEventListener('click', createMensage);
