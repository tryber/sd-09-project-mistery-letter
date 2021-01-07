// Gerar número aleatório
function randomValue(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

// Gerar classes
function randomClasses(element) {
  const grupoEstilo = ['newspaper', 'magazine1', 'magazine2'];
  const grupoTamanho = ['medium', 'big', 'reallybig'];
  const grupoRotacao = ['rotateleft', 'rotateright'];
  const grupoInclinacao = ['skewleft', 'skewright'];

  element.classList = '';
  element.classList.add(grupoEstilo[randomValue(grupoEstilo.length)]);
  element.classList.add(grupoTamanho[randomValue(grupoTamanho.length)]);
  element.classList.add(grupoRotacao[randomValue(grupoRotacao.length)]);
  element.classList.add(grupoInclinacao[randomValue(grupoInclinacao.length)]);

  if (element.classList.contains('newspaper')) {
    element.style.fontFamily = '"Times New Roman", serif';
  }
}

// Adiciona ao HTML Quantidade de Letras
function includeQdtWords(length) {
  if (!document.getElementById('carta-contador')) {
    const pCartaGerada = document.getElementById('carta-gerada');
    pCartaGerada.insertAdjacentHTML('afterend', `<p class="bold-text">Quantidade de Palavras: <span id="carta-contador">${length}</span></p>`);
  } else {
    document.getElementById('carta-contador').innerText = length;
  }
}

// Botão gerar carta misteriosa
document.querySelector('#criar-carta').addEventListener('click', function () {
  const cartaTexto = document.getElementById('carta-texto').value;
  const parent = document.getElementById('carta-gerada');
  parent.innerHTML = null;

  if (cartaTexto.length > 0 && cartaTexto.indexOf(' ') > 0) {
    let cartaTextoSpan = cartaTexto.split(' ');
    const cartaTextoLength = cartaTextoSpan.length;

    for (let cont = 0; cont < cartaTextoLength; cont += 1) {
      const elementHTML = document.createElement('span');
      const elementText = document.createTextNode(cartaTextoSpan[cont]);

      elementHTML.appendChild(elementText);
      randomClasses(elementHTML);

      parent.appendChild(elementHTML);
    }

    cartaTextoSpan = cartaTextoSpan.join(' ');

    document.querySelector('#carta-texto').value = cartaTexto;
    includeQdtWords(cartaTextoLength);
  } else {
    document.querySelector('#carta-gerada').innerHTML = 'Por favor, digite o conteúdo da carta.';
  }
});

// Alterar estilo palavra
document.querySelector('#carta-gerada').addEventListener('click', function (event) {
  randomClasses(event.target);
});
