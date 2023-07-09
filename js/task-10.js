const refsEl = {
    divBox: document.querySelector('div#boxes'),
    inputNumber: document.querySelector('input[type="number"]'),
    btnCreate: document.querySelector('button[data-create]'),
    btnClear: document.querySelector('button[data-destroy]'),
};

refsEl.btnCreate.addEventListener('click', onCreateBtn);
refsEl.btnClear.addEventListener('click', destroyBoxes);
refsEl.inputNumber.addEventListener("input", onGetAmount);


function onGetAmount(event) {
    refsEl.btnCreate.value = event.currentTarget.value;
}

function onCreateBtn() {
    createBoxes(refsEl.btnCreate.value);
}  


function createBoxes(amount) {
  let boxArray = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxSize += 10;
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${boxSize}px`;
    boxEl.style.height = `${boxSize}px`;
    boxArray.push(boxEl);
  }
  refsEl.divBox.append(...boxArray);
}

function destroyBoxes() {
    refsEl.inputNumber.value = '';
    refsEl.divBox.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}