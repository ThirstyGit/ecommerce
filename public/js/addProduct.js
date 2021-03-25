// Selecting necessary elements.
const form = document.querySelector('#form');
const name = document.querySelector('#name');
const price = document.querySelector('#price');
const newShop = document.querySelector('#new-shop');

// Validate and submit.
newShop.addEventListener("click", ()=> {
   if(name.value.length < 2) {
      alert("Name is too short! Name must have at least 2 characters.");
   }
   else if(Number.isNaN(Number(price.value))) {
      alert('Please give a proper price.');
   }
   else {
      form.submit();
   }
})
