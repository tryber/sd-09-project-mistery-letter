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

  splitTheLetter().forEach((word) => {
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

function countWords() {
  const cartaTextoInput = document.querySelector('#carta-texto');
  const cartaContadorParagraph = document.querySelector('#carta-contador');

  if (cartaTextoInput.value && cartaTextoInput.value != false) {
    cartaContadorParagraph.innerText = cartaTextoInput.value.split(' ').length;
  }
}

function verifyWords() {
  const cartaTextoInput = document.querySelector('#carta-texto');
  const cartaGerada = document.querySelector('#carta-gerada');

  if (!cartaTextoInput.value || cartaTextoInput.value == false) {
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

function criarCartaButtonTasks() {
  clearTheCartaTextoParagraph();
  putWordsInSpans();
  styleEachSpan();
  verifyWords();
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

    countWords();
  });

  cartaTextoInput.addEventListener('keyup', () => {
    if (!cartaTextoInput.value) {
      const cartaContador = document.querySelector('#carta-contador');

      cartaContador.innerText = '0';
    }
  });
}

function listenToCartaGerada() {
  const cartaGerada = document.querySelector('#carta-gerada')

  cartaGerada.addEventListener('click', (event) => {
    if (event.target.id !== 'carta-gerada') {
      event.target.className = ''

      event.target.classList.add(randomClass('size'))
      event.target.classList.add(randomClass('style'))
      event.target.classList.add(randomClass('rotation'))
      event.target.classList.add(randomClass('inclination'))
    }
  })
}

window.onload = () => {
  listenToCriarCartaButton();
  listenToCartaTextoInput();
  listenToCartaGerada();
};
