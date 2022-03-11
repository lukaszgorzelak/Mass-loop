const boxInput = document.querySelector('input[name="box"]');
const payInput = document.querySelector('input[name="pay"]');
const summary = document.querySelector('.calculator_summary-amount');
const [...inputs] = document.querySelectorAll("input");

let valueBox = '',
    valuePay = '',
    result = '';

const Calculator = () => {

    boxInput.addEventListener('input',function(){
        valueBox = Number(boxInput.value);
    });

    payInput.addEventListener('input',function(){
        valuePay = Number(payInput.value);
    });
  
    [...inputs].forEach(function(item) {
        item.addEventListener("input", function() {
            result = (12*(valueBox*valuePay - valueBox*valuePay/5)).toFixed(0) + ' zł';
            summary.style.cssText = "color: #FFB001;opacity: 1;";
            summary.textContent = result;
        });
    });
}

export { Calculator }
