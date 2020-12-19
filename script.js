const criarCartaButton = document.getElementById('criar-carta');
const cartaGeradaParagraph = document.getElementById('carta-gerada');
const cartaTextoInput = document.getElementById('carta-texto');

function createWords(letter) {
  for (let index = 0; index < letter.length; index += 1) {
    if (letter[index]) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = letter[index];
      cartaGeradaParagraph.appendChild(wordSpan);
    }
  }
}

function createLetter() {
  if (cartaTextoInput.value.trim()) {
    const letter = cartaTextoInput.value.trim().split(' ');
    cartaGeradaParagraph.innerHTML = '';
  } else {
    cartaGeradaParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
  }
}

criarCartaButton.addEventListener('click', createLetter);
