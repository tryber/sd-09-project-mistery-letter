const criarCartaButton = document.getElementById('criar-carta');
const cartaGeradaParagraph = document.getElementById('carta-gerada');
const cartaTextoInput = document.getElementById('carta-texto');

function createLetter(){
  const letter = cartaTextoInput.value.split(" ");
  for (let word of letter) {
    const wordSpan = document.createElement('span');
    wordSpan.innerText = word;
    cartaGeradaParagraph.appendChild(wordSpan);
  }
}

criarCartaButton.addEventListener('click', createLetter);
