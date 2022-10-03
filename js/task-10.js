function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxesDiv: document.querySelector('div#boxes'),
};

let boxAmount = 0;

refs.input.addEventListener('input', onInputChange);
refs.createBtn.addEventListener('click', createBoxesOnClick);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function onInputChange(event) {
  boxAmount = Number(event.currentTarget.value);
};

function createBoxes(amount) {
  const boxes = [];
  let divSizes = 30;

  for (let i = 0; i < amount; i += 1) {
    const createdDiv = document.createElement("div");

    createdDiv.style.width = `${divSizes}px`;
    createdDiv.style.height = `${divSizes}px`;
    createdDiv.style.backgroundColor = getRandomHexColor();
    divSizes += 10;
    boxes.push(createdDiv);
  }

  refs.boxesDiv.append(...boxes);
};

function createBoxesOnClick() {
  return createBoxes(boxAmount);
};

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
};

console.log(refs.boxesDiv);