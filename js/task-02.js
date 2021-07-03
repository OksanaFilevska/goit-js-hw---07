const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsOptions = elements => {
  return elements.map(element => {
    const itemEl = document.createElement('li');
    itemEl.textContent = element;
    return itemEl;
  });
};

const ingredientsItem = makeIngredientsOptions(ingredients);
ingredientsList.append(...ingredientsItem);
