const criarCartaBt = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');

function createLetter() {
  criarCartaBt.addEventListener('click', function () {
    cartaGerada.innerHTML = '';
    const word = cartaTexto.value.split(' ');
    if (cartaTexto.value === '' || word[1] === '') {
      cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      for (let index = 0; index < word.length; index += 1) {
        const words = document.createElement('span');
        words.innerText = word[index];
        cartaGerada.appendChild(words);
      }
    }
  });
}
createLetter();
