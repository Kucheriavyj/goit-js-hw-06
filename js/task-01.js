const navEl = document.querySelector('#categories');
const listEl = navEl.children.length;
console.log('Number of categories:', listEl);


const totalCategories = document.querySelectorAll('.item');


const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArray);