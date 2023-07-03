function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainChangeColor = document.querySelector('.change-color');
const mainBodyEl = document.querySelector('body');
const mainSpanEl = document.querySelector('.color');

mainChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  mainBodyEl.style.backgroundColor = getRandomHexColor();
  mainSpanEl.textContent = getRandomHexColor();
  //mainSpanEl.replaceChildren(getRandomHexColor(toString));
}