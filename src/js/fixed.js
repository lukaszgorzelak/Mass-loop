const header = document.querySelector('header');
const logo = document.querySelector('img.logo');
const items = document.querySelectorAll('.nav__list-item');
const btnBuy = document.querySelector('.buy');
const hamburger = document.querySelector('.hamburger');

const Fixed = () => {
    header.classList.add("fixed");
    logo.style.marginTop = '20px';
    btnBuy.style.marginTop = '16px';
    hamburger.style.cssText = "bottom: 0; right: 2%";

    for (const item of items) {
        item.style.marginTop = '35px';
    }

    let pageY = window.pageYOffset;

    if(pageY === 0){
        header.classList.remove("fixed");
        logo.style.marginTop = '45px';
        btnBuy.style.marginTop = '41px';
        hamburger.style.cssText = "bottom: unset; top: 7.4%; right: 0";
        for (const item of items) {
            item.style.marginTop = '60px';
        }
    }
}

export { Fixed }
