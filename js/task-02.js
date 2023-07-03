const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');
const itemsEl = ingredients.map((item) => {
  const itemLi = document.createElement('li');
  itemLi.classList.add('item');
  itemLi.textContent = item;
  return itemLi
});
ingredientsListEl.append(...itemsEl);