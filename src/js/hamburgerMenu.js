const hamburger = document.querySelector('.hamburger');
const navHamburger = document.querySelector('.nav__hamburger');
const header = document.querySelector('header');


const handleClick = () => {

  hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger--active');
    navHamburger.classList.toggle('navigation--active');

    if (header.classList.contains('fixed')) {
      navHamburger.classList.toggle('top');  }
  });
  
}
  export { handleClick }