const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    const valueInput = event.currentTarget.value.trim();
    console.log(valueInput);
    spanEl.textContent = valueInput ? valueInput : 'Anonymous';
    //spanEl.textContent = valueInput || 'Anonymous';
});