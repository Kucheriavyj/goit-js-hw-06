function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const mainChangeColor = document.querySelector('.change-color');
const mainBodyEl = document.querySelector('body');
const mainSpanEl = document.querySelector('.color');

mainChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  const mainColor = getRandomHexColor();
  mainBodyEl.style.backgroundColor = mainColor;
  mainSpanEl.textContent = mainColor;
};