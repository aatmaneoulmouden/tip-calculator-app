// Fields
const billField = document.querySelector('#bill');
const preDefindedTipFields = document.querySelectorAll('[name=tip]');
const customTipField = document.querySelector('#custom-tip-input');
const peopleCountField = document.querySelector('#num-people');

const fillOutput = (tipAmount, total) => {
    document.querySelector('#tip-amount').textContent = tipAmount.toFixed(2);
    document.querySelector('#total').textContent = total.toFixed(2);
}

const calculateTip = (bill, tip, peopleCount) => {
    let tipAmount = (bill * (tip / 100)) / peopleCount;
    let total = (bill / peopleCount) + tipAmount;

    fillOutput(tipAmount, total);
};



peopleCountField.addEventListener('focusout', () => {
    let billValue = parseFloat(billField.value);
    let peopleCountValue = parseInt(peopleCountField.value);
    let tipValue = null;

    if (customTipField.value.length > 1) {
        tipValue = parseInt(customTipField.value);
    } else {
        preDefindedTipFields.forEach(tip => {
            if (tip.checked) {
                tipValue = parseInt(tip.value);
            }
        });
    }
    console.log(tipValue);
    calculateTip(billValue, tipValue, peopleCountValue);
});