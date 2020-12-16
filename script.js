/* Requisito 16
- adicionar classes na tag span de forma aleatoria
- adicionar mais de uma classe em uma palavra
- nao adicionar mais de uma classe do mesmo grupo na mesma palavra
- grupos (estilo, tamanho, rotacao, inclinacao)

- OBS.: uma classe de cada grupo está sendo sorteada e atribuída.
  Em breve, será atribuída uma nova forma de sortear classes, onde não necessariamente
  todas as palavras terão a mesma quantidade de classes
*/

function drawTwoNumbers() {
  const indexRotationInclination = Math.floor(Math.random() * 2);
  return indexRotationInclination;
}

function drawThreeNumbers() {
  const indexStyleSize = Math.floor(Math.random() * 3);
  return indexStyleSize;
}

function randomClassName() {
  const style =
    [
      'newspaper',
      'magazine1',
      'magazine2',
    ];

  const size =
    [
      'medium',
      'big',
      'reallybig',
    ];

  const rotation =
    [
      'rotateleft',
      'rotateright',
    ];

  const inclination =
    [
      'skewleft',
      'skewright',
    ];

  const newClassName = `${style[drawThreeNumbers()]} ${size[drawThreeNumbers()]} ${rotation[drawTwoNumbers()]} ${inclination[drawTwoNumbers()]}`;

  return newClassName;
}

/* Requisto 18 - Bonus
- um paragrafo, contador de palavras com id = carta-contador
- esse paragrafo deve contar quantas palavras existem na carta misteriosa gerada;
*/

function generateWordsCounter() {
  const counter = document.querySelector('#carta-gerada').childElementCount;
  const paragraphCounter = document.querySelector('#carta-contador');
  paragraphCounter.innerText = `${counter}`;
}

/* Requisito 3, 4 & 5 (respectivamente)
- apertar no botao para gerar a carta
- cada palavra deve ser colocada em uma tag span
- toda tag span deve ser adicionada como filha da tag p

- o texto deve permanecer no campo input

- Se o usuário não preencher o campo ou preencher com
- apenas espaços vazios adicionar a mensagem:
'Por favor, digite o conteúdo da carta.
*/

function createSpan(text) {
  const mySpan = document.createElement('span');
  mySpan.innerText = text;
  return mySpan;
}

function addSpanToParagraph() {
  const generateButton = document.querySelector('button');
  const myParagraph = document.querySelector('#carta-gerada');
  generateButton.addEventListener('click', () => {
    if (document.querySelector('#carta-texto').value.trim() === '') {
      return (myParagraph.innerText = 'Por favor, digite o conteúdo da carta.');
    }
    while (myParagraph.childNodes.length > 0) {
      myParagraph.childNodes.forEach((node) => {
        myParagraph.removeChild(node);
        return myParagraph;
      });
    }
    const wordsList = document.querySelector('input').value.split(' ');
    wordsList.forEach((word) => {
      const newSpan = createSpan(word);
      newSpan.className = randomClassName();
      if (newSpan.innerText.trim() !== '') {
        myParagraph.appendChild(newSpan);
      }
      return myParagraph;
    });
    generateWordsCounter();
    return myParagraph;
  });
}

addSpanToParagraph();
