const criarCartaButton = document.getElementById('criar-carta');
const cartaGeradaParagraph = document.getElementById('carta-gerada');
const cartaTextoInput = document.getElementById('carta-texto');
const cartaContadorParagraph = document.getElementById('carta-contador');

const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const skewGroup = ['skewleft', 'skewright'];

const styles = [styleGroup, sizeGroup, rotationGroup, skewGroup];

function rngNumber(numberInterval) {
  return Math.floor(Math.random() * numberInterval);
}

function addRandomClasses(wordSpan) {
  const rngStyles = [1];
  for (let index = 1; index < 4; index += 1) {
    rngStyles.push(rngNumber(2));
  }
  for (let index = 0; index < rngStyles.length; index += 1) {
    if (rngStyles[index]) {
      wordSpan.classList.add(styles[index][rngNumber(styles[index].length)]);
    }
  }
}

function clickRerollClasses(event) {
  const wordSpan = event.target;
  const rngStyles = [];
  for (let index = 0; index < 4; index += 1) {
    rngStyles.push(rngNumber(2));
  }
  for (let index = 0; index < rngStyles.length; index += 1) {
    if (rngStyles[index]) {
      wordSpan.classList.add(styles[index][rngNumber(styles[index].length)]);
    }
  }
}

function createWords(letter) {
  for (let index = 0; index < letter.length; index += 1) {
    if (letter[index]) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = letter[index];
      wordSpan.style.display = 'inline-block';
      cartaGeradaParagraph.appendChild(wordSpan);
      addRandomClasses(wordSpan);
      cartaContadorParagraph.innerText = `Sua carta misteriosa possui ${letter.length} palavras.`
    }
  }
}

function createLetter() {
  if (cartaTextoInput.value.trim()) {
    const letter = cartaTextoInput.value.trim().split(' ');
    cartaGeradaParagraph.innerHTML = '';
    createWords(letter);

  } else {
    cartaGeradaParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

cartaGeradaParagraph.addEventListener('click', clickRerollClasses);
criarCartaButton.addEventListener('click', createLetter);
