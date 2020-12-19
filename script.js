const criarCartaButton = document.getElementById('criar-carta');
const cartaGeradaParagraph = document.getElementById('carta-gerada');
const cartaTextoInput = document.getElementById('carta-texto');

function createLetter() {
  const letter = cartaTextoInput.value.split(' ');
  if (letter) {
    cartaGeradaParagraph.innerHTML = '';
    console.log(letter);
    for (let index = 0; index < letter.length; index += 1) {
      const wordSpan = document.createElement('span');
      wordSpan.innerText = letter[index];
      cartaGeradaParagraph.appendChild(wordSpan);
    }
  }
}

criarCartaButton.addEventListener('click', createLetter);
