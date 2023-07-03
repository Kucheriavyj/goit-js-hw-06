const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', function () {

    valueEl.textContent = counterValue -=1;
});

incrementBtn.addEventListener('click', function () {

    valueEl.textContent = counterValue +=1;
});