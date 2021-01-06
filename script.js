// Gerar número aleatório
function ramdomValue(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

// Gerar classes
function ramdomClasses() {
  const grupoEstilo = ['', 'newspaper ', 'magazine1 ', 'magazine2 '];
  const grupoTamanho = ['', 'medium ', 'big ', 'reallybig '];
  const grupoRotacao = ['', 'rotateleft ', 'rotateright '];
  const grupoInclinacao = ['', 'skewleft', 'skewright'];

  let classes = '';

  classes += grupoEstilo[ramdomValue(grupoEstilo.length)];
  classes += grupoTamanho[ramdomValue(grupoTamanho.length)];
  classes += grupoRotacao[ramdomValue(grupoRotacao.length)];
  classes += grupoInclinacao[ramdomValue(grupoInclinacao.length)];

  return classes;
}

// Adiciona ao HTML Quantidade de Letras
function includeQdtWords(length) {
  const qtdWords = `Quantidade de Palvras: ${length}`;

  if (!document.getElementById('carta-contador')) {
    const pCartaGerada = document.getElementById('carta-gerada');
    pCartaGerada.insertAdjacentHTML('afterend', `<p id="carta-contador">${qtdWords}</p>`);
  } else {
    document.getElementById('carta-contador').innerText = qtdWords;
  }
}

// Botão gerar carta misteriosa
document.querySelector('#criar-carta').addEventListener('click', function () {
  const cartaTexto = document.getElementById('carta-texto').value;

  if (cartaTexto.length > 0 && cartaTexto.indexOf(' ') > 0) {
    let cartaTextoSpan = cartaTexto.split(' ');
    const cartaTextoLength = cartaTextoSpan.length;

    for (let cont = 0; cont < cartaTextoLength; cont += 1) {
      cartaTextoSpan[cont] = `<span class="${ramdomClasses()}">${cartaTextoSpan[cont]}</span>`;
    }

    cartaTextoSpan = cartaTextoSpan.join(' ');

    document.querySelector('#carta-gerada').innerHTML = cartaTextoSpan;
    document.querySelector('#carta-texto').value = cartaTexto;
    includeQdtWords(cartaTextoLength);
  } else {
    alert('Por favor, digite o conteúdo da carta.');
  }
});

// Alterar estilo palavra
document.querySelector('#carta-gerada').addEventListener('click', function (event) {
  (event.target).className = ramdomClasses();
});
