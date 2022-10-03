const refs = {
  input: document.querySelector('input#validation-input')
};
let inputValueLength = 0;

refs.input.addEventListener('input', onInputChange);
refs.input.addEventListener('blur', onInputBlur);

function onInputChange(event) {
  inputValueLength = event.currentTarget.value.length;
}

function onInputBlur() {
  if (inputValueLength === Number(refs.input.getAttribute("data-length"))) {    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
}