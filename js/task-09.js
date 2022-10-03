function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector('button.change-color'),
  hexColorSpan: document.querySelector('span.color'),
};

refs.changeColorBtn.addEventListener('click', () => {
  const body = document.querySelector('body');

  body.style.backgroundColor = getRandomHexColor();
  refs.hexColorSpan.textContent = getRandomHexColor();
});