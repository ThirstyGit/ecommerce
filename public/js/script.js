const dropdownHamburger = document.querySelector('#dropdown-hamburger');
const dropdown = document.querySelector('#dropdown');


dropdownHamburger.addEventListener('click', () => {
   if(dropdown.classList.contains('dropdown-closed')) {
      dropdown.classList.remove('dropdown-closed');
      dropdown.classList.add('dropdown-open');
   }
   else {
      dropdown.classList.remove('dropdown-open');
      dropdown.classList.add('dropdown-closed');
   }
})
document.addEventListener('click', (e) => {
   if(e.target != dropdownHamburger && dropdown.classList.contains('dropdown-open')) {
      dropdown.classList.remove('dropdown-open');
      dropdown.classList.add('dropdown-closed');
   }
})

