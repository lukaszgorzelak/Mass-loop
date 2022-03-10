import { Fixed } from "./fixed";
import { handleClick } from "./hamburgerMenu";
import { Calculator } from "./_calculator";


document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll',Fixed);
    handleClick();
    Calculator();
});