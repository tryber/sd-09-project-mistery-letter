function submitLetter() {
  const button = document.querySelector('#criar-carta');
  const inputText = document.querySelector('#carta-texto');
  const paragraph = document.querySelector('#carta-gerada');
  button.addEventListener('click', function () {
    const array = inputText.value.split(' ');
    paragraph.innerText = '';
    for (let index = 0; index < array.length; index += 1) {
      const spanElement = document.createElement('span');
      spanElement.innerText = array[index];
      paragraph.appendChild(spanElement);
      console.log(index)
    }
  });
}

submitLetter();
