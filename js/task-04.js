const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueCounterSpan: document.querySelector('span#value'),
}
let counterValue = 0;

refs.decrementBtn.addEventListener('click', onDecrementValue);
refs.incrementBtn.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  counterValue -= 1; 
  refs.valueCounterSpan.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1; 
  refs.valueCounterSpan.textContent = counterValue;
}