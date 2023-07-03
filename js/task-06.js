const validInputEl = document.querySelector('#validation-input');
const lengthInputEl = Number(validInputEl.dataset.length);

validInputEl.addEventListener('blur', onBlur);
function onBlur() {
    if (validInputEl.value.trim().length === lengthInputEl) {
        validInputEl.classList.remove('invalid');
        validInputEl.classList.add('valid');
    } else if (validInputEl.value.length === 0) {
        validInputEl.classList.remove('valid');
        validInputEl.classList.add('invalid');
    } else {
        validInputEl.classList.add('invalid');
    }
}
