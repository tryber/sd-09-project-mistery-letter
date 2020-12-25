const tipo1 = ['newspaper', 'magazine1', 'magazine2', 'blank'];
const tipo2 = ['medium', 'big', 'reallybig'];
const tipo3 = ['rotateleft', 'rotateright', 'noRotation'];
const tipo4 = ['skewleft', 'skewright', 'noInclination'];

function pickRandom(array) {
  const myChoice = Math.floor(Math.random() * array.length);
  return array[myChoice];
}

// Requisito 1
function generateInputField() {
  const inputField = document.createElement('input');
  inputField.type = 'text';
  inputField.placeholder = 'Insira aqui sua carta';
  inputField.id = 'carta-texto';
  document.querySelector('.inputHolder').appendChild(inputField);
}

generateInputField();

// Requisito 2
function generateParagraph() {
  const paragraph = document.createElement('p');
  paragraph.id = 'carta-gerada';
  document.querySelector('.paragraphHolder').appendChild(paragraph);
}

generateParagraph();

// Requisito 3
function generateButton() {
  const myButton = document.createElement('button');
  myButton.id = 'criar-carta';
  myButton.innerText = 'Gerar Carta';
  document.querySelector('.inputHolder').appendChild(myButton);
}

generateButton();

// Requisito 17
function mudaEstilos(self) {
  self.target.classList = '';
  self.target.classList.toggle(pickRandom(tipo1));
  self.target.classList.toggle(pickRandom(tipo2));
  self.target.classList.toggle(pickRandom(tipo3));
  self.target.classList.toggle(pickRandom(tipo4));
}

function geradorDeCarta() {
  document.querySelector('#carta-gerada').innerText = '';
  const myText = document.querySelector('#carta-texto').value;
  if (myText !== '' && myText.trim().length !== 0) {
    const myLetter = document.querySelector('#carta-texto').value.trim().split(' ');
    document.querySelector('#carta-contador').innerText = myLetter.length;
    for (let index = 0; index < myLetter.length; index += 1) {
      const myWord = document.createElement('span');
      myWord.innerText = myLetter[index];
      myWord.addEventListener('click', mudaEstilos);
      document.querySelector('#carta-gerada').appendChild(myWord);
    }
  } else {
    // Requisito 5
    const myWord = document.createElement('p');
    myWord.innerText = 'Por favor, digite o conteúdo da carta.';
    document.querySelector('#carta-gerada').appendChild(myWord);
  }
}

function associaEstiloAoSpan() {
  const myNodeList = document.querySelectorAll('#carta-gerada>span');
  for (let index = 0; index < myNodeList.length; index += 1) {
    myNodeList[index].classList.toggle(pickRandom(tipo1));
    myNodeList[index].classList.toggle(pickRandom(tipo2));
    myNodeList[index].classList.toggle(pickRandom(tipo3));
    myNodeList[index].classList.toggle(pickRandom(tipo4));
  }
}

function criaContador() {
  const myCounter = document.createElement('p');
  myCounter.id = 'carta-contador';
  document.querySelector('.extraStuff').appendChild(myCounter);
}

criaContador();

document.querySelector('#criar-carta').addEventListener('click', function () {
  geradorDeCarta();
  associaEstiloAoSpan();
});
