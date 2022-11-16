// IMPORTING FILE

// import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';

// import * as ShoppingCart from './shoppingCart.js';

console.log('Importing module');

// addToCart('Bread', 10);
// console.log(tp, tq);

// ShoppingCart.addToCart('Donust', 6);

// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.tq);

// import add, { addToCart, totalPrice as tp, tq } from './shoppingCart.js';

// import add, { cart } from './shoppingCart.js';

// add('Pizza', 3);
// add('Birria', 5);
// add('Mole', 14);
// add('Pozole', 10);

// console.log(cart);

const solicitar = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    title: data.at(-1).title,
    body: data.at(-1).body,
  };
};

// No es la mejor forma
// const lastPost = solicitar();
// console.log(lastPost.then((last) => console.log(last)));

const lastPost = await solicitar();
console.log(lastPost);
