const addProduct = document.querySelector('#add-product');
const changeShopImage = document.querySelector('#change-shop-image');

addProduct.addEventListener('click', () => {
   window.location.href += '/addproduct';
})
changeShopImage.addEventListener('click', () => {
   window.location.href += '/changeimage';
})
