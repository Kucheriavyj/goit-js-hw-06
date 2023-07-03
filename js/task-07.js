const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onInput);
function onInput() {
    textEl.style.fontSize = fontSizeControlEl.value + 'px';
};