const categoriesListRef = document.querySelectorAll('#categories li.item');
console.log(`Number of categories: ${categoriesListRef.length}`);

for (let i = 0; i < categoriesListRef.length; i += 1) {
  console.log(`Category: ${categoriesListRef[i].querySelector('h2').textContent}`);
  console.log(`Elements: ${categoriesListRef[i].querySelectorAll('li').length}`);
}