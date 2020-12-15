const criarCartaBt = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');

function createLetter() {
  criarCartaBt.addEventListener('click', function () {
    let word = cartaTexto.value.split(' ');
    for (let index = 0; index < word.length; index += 1) {
      const words = document.createElement('span');
      words.innerText = word[index];
      cartaGerada.appendChild(words);
    }
  });
}
createLetter();
