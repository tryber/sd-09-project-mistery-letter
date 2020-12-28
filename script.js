function submitLetter() {
  const button = document.querySelector('#criar-carta');
  const formText = document.querySelector('#form-texto');
  const paragraph = document.querySelector('p');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    const array = formText.children[0].value.split(' ');
    for (let index = 0; index < array.length; index += 1) {
      const spanElement = document.createElement('span');
      spanElement.innerText = array[index];
      paragraph.appendChild(spanElement);
    }
  });
}

submitLetter();
