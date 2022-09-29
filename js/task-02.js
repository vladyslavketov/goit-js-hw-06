const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('ul#ingredients');
const ingredientsItemsRef = ingredients.map(ingredientName => {
  const liRef = document.createElement('li');

  liRef.textContent = ingredientName;
  liRef.classList.add('item');

  return liRef;
});

ingredientsListRef.append(...ingredientsItemRef);