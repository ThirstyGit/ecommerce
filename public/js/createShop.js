// Selecting necessary elements.
const form = document.querySelector('.form');
const name = document.querySelector('#name');
const newShop = document.querySelector('#new-shop');

// Validate and submit.
newShop.addEventListener("click", ()=> {
   if(name.value.length < 4) {
      alert("Name is too short!");
   }
   else {
      form.submit();
   }
})
