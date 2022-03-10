const boxInput = document.querySelector('input[name="box"]');
const payInput = document.querySelector('input[name="pay"]');
const summary = document.querySelector('.calculator_summary-amount');

const [...inputs] = document.querySelectorAll("input");

const Calculator = () => {
  
    [...inputs].forEach(function(item) {
        item.addEventListener("input", function() {
            let result = item.value;
            summary.style.cssText = "color: #FFB001;opacity: 1;";
            summary.textContent = result + ' zł';
        });
    });

    boxInput.addEventListener('input', function() {
        sessionStorage.setItem('key', boxInput.value);
    })

    payInput.addEventListener('input', function() {
        sessionStorage.setItem('key', payInput.value);
    })
}

export { Calculator }
