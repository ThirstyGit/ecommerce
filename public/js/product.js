// Selecting all necessary elements.
const addToCart = document.querySelector('#add-to-cart');
const qunatity = document.querySelector('#quantity');

addToCart.addEventListener('click', () => {
   // If there is an item, set it to previous item + new item.
   if(localStorage.getItem('cart') !== null) {
      localStorage.setItem('cart', `${localStorage.getItem('cart')},${addToCart.value}:${qunatity.value}`);
   }
   else { // If there are no item just set it as the first item.
      localStorage.setItem('cart', `${addToCart.value}:${qunatity.value}`);
   }
});

