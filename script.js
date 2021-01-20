// no mínimo 2 classes de 2 grupos e no máximo 4 classes de 4 grupos
// um número aleatório integral de 2 a 4 para escolher a quantidade de classes
// para escolher o grupo de classe um número aleatório de 1 a 4, depois remove o índice da classe selecionada
// para escolher a classe dentro do grupo um número aleatório que vai até o número de classes existentes

function buildSpanClasses(span) {
  const classAmount = Math.round(Math.random() * (4 - 2) + 2);
  const classObject = {
    estilo: ['newspaper','magazine1','magazine2'],
    tamanho: ['medium','big','reallybig'],
    rotation: ['rotateleft','rotateright'],
    skew: ['skewleft','skewright'],
  };
  for (let index = 0; index < classAmount; index += 1) {
    // numero aleatório para escolher o índice de classGroup
    // splice para remover o índice escolhido de classGroup
    // span.classList.add()
    let randomIndex = Math.round(Math.random() * (Object.keys(classObject).length - 1));
    let randomStyle = Math.round(Math.random() * (Object.values(classObject)[`${randomIndex}`].length - 1));
    span.classList.add(`${Object.values(classObject)[randomIndex][randomStyle]}`);
  }
}

function buildMisteryLetter(texto) {
  const cartaGerada = document.querySelector('#carta-gerada');
  const splitText = texto.split(' ');
  for (let index = 0; index < splitText.length; index += 1) {
    const span = document.createElement('span');
    buildSpanClasses(span);
    span.innerText = splitText[index];
    cartaGerada.appendChild(span);
  }
}

function checkEmptyInput(texto) {
  if(texto === ' ' || '') {
    console.log(texto);
    const cartaGerada = document.querySelector('#carta-gerada');
    cartaGerada.innerText = 'por favor, digite o conteúdo da carta';
  } else {
    buildMisteryLetter(texto);
  }
}

function receiveInput() {
  const cartaTexto = document.querySelector('#carta-texto');
  const texto = cartaTexto.value;
  texto.replace(/\s\s+/g, ' ');
  checkEmptyInput(texto);
}

function addEventListeners() {
  const criarCarta = document.querySelector('#criar-carta');
  criarCarta.addEventListener('click', receiveInput);
}

window.onload = function () {
  addEventListeners();
};
