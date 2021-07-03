const refs = {
  input: document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    refs.textSpan.textContent = 'незнакомец';
  } else refs.textSpan.textContent = event.currentTarget.value;
}
