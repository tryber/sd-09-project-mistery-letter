const styleClass = ['magazine1', 'magazine2', 'newspaper'];
const sizesClass = ['medium', 'big', 'reallybig'];
const rotationsClass =['rotateleft', 'rotateright'];
const skewClass = ['skewleft', 'skewright'];

function removeMensage() {
  const span = document.querySelectorAll('span');
  for (let index = 0; index < span.length; index += 1) {
    const spanDelete = span[index];
    spanDelete.remove();
  }
}

function randomClass(mensage, arrayClass) {
  const classN = arrayClass[Math.floor(Math.random() * arrayClass.length)];
  mensage.className += `${classN} `;
}

function createSpan(mensageClear) {
  const father = document.querySelector('#carta-gerada');
  const mensageSpan = document.createElement('span');
  mensageSpan.innerText = `${mensageClear}`;
  randomClass(mensageSpan, styleClass);
  randomClass(mensageSpan, sizesClass);
  randomClass(mensageSpan, rotationsClass);
  randomClass(mensageSpan, skewClass);
  father.appendChild(mensageSpan);
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
