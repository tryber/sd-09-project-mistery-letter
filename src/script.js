function CSSClass(classType) {
  const CSSClasses = {
    style: [
      // 'none',
      'newspaper',
      'magazine1',
      'magazine2',
    ],

    size: [
      // 'none',
      'medium',
      'big',
      'reallybig',
    ],

    rotation: [
      // 'none',
      'rotateleft',
      'rotateright',
    ],

    inclination: [
      // 'none',
      'skewleft',
      'skewright',
    ],
  };

  return CSSClasses[classType];
}

function randomClass(classType) {
  const classArray = CSSClass(classType);
  const randomIndex = Math.floor(Math.random() * classArray.length);

  return classArray[randomIndex];
}

function splitTheLetter() {
  const cartaTextoInput = document.querySelector('#carta-texto');
  const splittedLetterArray = cartaTextoInput.value.split(' ');

  return splittedLetterArray;
}

function putWordsInSpans() {
  const cartaGeradaParagraph = document.querySelector('#carta-gerada');

  splitTheLetter().map((word) => {
    const span = document.createElement('span');

    span.innerText = `${word} `;
    cartaGeradaParagraph.appendChild(span);
  });
}

function clearTheCartaTextoParagraph() {
  const cartaTextoParagraph = document.querySelector('#carta-gerada');

  cartaTextoParagraph.innerHTML = '';
}

function styleEachSpan() {
  const spans = document.querySelectorAll('#carta-gerada span');

  spans.forEach((span) => {
    span.classList.add(randomClass('style'));
    span.classList.add(randomClass('size'));
    span.classList.add(randomClass('rotation'));
    span.classList.add(randomClass('inclination'));
  });
}

function criarCartaButtonTasks() {
  clearTheCartaTextoParagraph();
  putWordsInSpans();
  styleEachSpan();
}

function listenToCriarCartaButton() {
  const criarCartaButton = document.querySelector('#criar-carta');

  criarCartaButton.addEventListener('click', () => {
    criarCartaButtonTasks();
  });
}

function listenToCartaTextoInput() {
  const cartaTextoInput = document.querySelector('#carta-texto');

  cartaTextoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      criarCartaButtonTasks();
    }
  });
}

window.onload = () => {
  listenToCriarCartaButton();
  listenToCartaTextoInput();
};
