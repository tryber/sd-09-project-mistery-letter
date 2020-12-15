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

function randomClass () {
  const words = document.getElementsByTagName('span');
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const inclination = ['skewleft', 'skewright'];
  criarCartaBt.addEventListener('click', function () {
    for (let index = 0; index < words.length; index += 1) {
      words[index].classList.add(style[Math.floor(Math.random() * 3)]);
      words[index].classList.add(size[Math.floor(Math.random() * 3)]);
      words[index].classList.add(rotation[Math.floor(Math.random() * 2)]);
      words[index].classList.add(inclination[Math.floor(Math.random() * 2)]);
      }
  });
}
randomClass();
