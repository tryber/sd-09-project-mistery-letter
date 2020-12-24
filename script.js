const cartaTexto = document.querySelector('#carta-texto');
const criarCarta = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');

function gerarCarta() {
  const words = cartaTexto.value.split(' ');

  for (let index = 0; index < words.length; index += 1){
    const span = document.createElement('span');
    span.innerText = words[index];
    cartaGerada.appendChild(span);
  }
}

criarCarta.addEventListener('click', gerarCarta);