'use strict';

const apikey = '31a56458-1774-421a-a370-488b9cf9e30b';

export const searchRecipe = async (recipeName) => {
  const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeName}&key=${apikey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
