const categoryEl = document.querySelectorAll("#categories > li.item");
const categoryListEl = categoryEl.length;
console.log('Number of categories:', categoryListEl);


categoryEl.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryTotalElements = category.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryTotalElements}`);
}); 