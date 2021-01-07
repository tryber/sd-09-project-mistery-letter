const criarCartaBt = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const cartaTexto = document.querySelector('#carta-texto');
const cartaContador = document.querySelector('#carta-contador');

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

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function randomClass() {
  const words = document.getElementsByTagName('span');
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

function changeClass() {
  cartaGerada.addEventListener('click', function (event) {
    event.target.classList.toggle(style[Math.floor(Math.random() * 3)]);
    event.target.classList.toggle(size[Math.floor(Math.random() * 3)]);
    event.target.classList.toggle(rotation[Math.floor(Math.random() * 2)]);
    event.target.classList.toggle(inclination[Math.floor(Math.random() * 2)]);
  });
}
changeClass();

function countWord() {
  criarCartaBt.addEventListener('click', function () {
    const wordCount = cartaGerada.childElementCount;
    cartaContador.innerText = `${wordCount}`;
  });
}
countWord();
