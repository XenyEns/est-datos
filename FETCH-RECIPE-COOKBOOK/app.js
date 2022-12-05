'use strict';
import { searchRecipe } from './recipes.js';

/**
 * DOM ELEMENTS
 */
const containerData = document.getElementById('data');
const searchInput = document.getElementsByTagName('input');
const buttons = document.getElementsByTagName('button');

/**
 * API ELEMENTS
 */
let result = {};
const btnSearch = buttons[0];
const btnClear = buttons[1];

/**
 * El parámetro es el alimento buscado
 * @param {item} items
 */
const showData = (items) => {
  for (const item of items) {
    // console.log(item);
    const div = document.createElement('div');
    div.className = 'main__data_food';
    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    img.src = item.image_url;
    img.alt = 'food picture';
    img.className = 'main__data_food-img';
    p1.textContent = item.title;
    p1.className = 'main__data_food-title';

    p2.textContent = item.publisher;
    p2.className = 'main__data_food-publisher';

    div.append(img, p1, p2);
    containerData.append(div);
  }
};

/**
 * Con esta función hacemos la búsqueda en la API y obtenemos la data
 */
const viewValue = async () => {
  let items = [];
  result = await searchRecipe(searchInput[0].value);

  items = result.data.recipes.map((item) => {
    return item;
  });
  showData(items);
};

/**
 * Con esta funció eliminamos los hijos del contenedor de los recipes
 */

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const clearData = () => {
  removeAllChildNodes(containerData);
};

btnSearch.onclick = viewValue;
btnClear.onclick = clearData;

/**
 * FOOTER INFO
 */
const footerTitle = document.getElementById('f-title');
const authorName = document.createElement('p');
authorName.className = 'footer__title-author';
authorName.textContent = `Copyright © 2022 Xeny Padilla. All Rigths Reserved `;
footerTitle.append(authorName);
