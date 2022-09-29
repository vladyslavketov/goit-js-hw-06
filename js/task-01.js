const categoriesItemsRef = document.querySelectorAll('#categories li.item');
console.log(`Number of categories: ${categoriesItemsRef.length}`);

// варіант 1
for (let i = 0; i < categoriesItemsRef.length; i += 1) {
  console.log(`Category: ${categoriesItemsRef[i].querySelector('h2').textContent}`);
  console.log(`Elements: ${categoriesItemsRef[i].querySelectorAll('li').length}`);
};

// варіант 2
// categoriesItemsRef.forEach(function (item) {
//   console.log(`Category: ${item.querySelector('h2').textContent}`);
//   console.log(`Elements: ${item.querySelectorAll('li').length}`);
// });