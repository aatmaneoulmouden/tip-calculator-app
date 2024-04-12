/**
 * This script adds event listeners to a set of tip option labels and a custom tip input, removing the
 * 'selected' class from all labels when one is clicked, and removing the 'selected' class when the
 * custom tip input is focused.
 */
const billInput = document.querySelector('#bill');
const tipOptionRadios = document.querySelectorAll('[name=tip]');
const tipOptionLabels = document.querySelectorAll('.tip-option label');
const customTipInput = document.querySelector('#custom-tip-input');
const peopleCountInput = document.querySelector('#num-people');
const tipAmountOutput = document.querySelector('#tip-amount');
const totalOutput = document.querySelector('#total');

const removeSelectedClass = (toRemoveFromElements) => {
    toRemoveFromElements.forEach(element => {
        element.classList.remove('selected');
    });
}

tipOptionLabels.forEach(tipOptionLabel => {
    tipOptionLabel.addEventListener('click', () => {
        removeSelectedClass(tipOptionLabels);
        tipOptionLabel.classList.add('selected');
    });
});

customTipInput.addEventListener('focus', () => {
    removeSelectedClass(tipOptionLabels);
});


const inputsValidation = () => {
    if (billInput.value.length == 0) {
        console.log('err 1');
        return false;
    }

    if (peopleCountInput.value.length == 0) {
        console.log('err 2');
        return false;
    }
}


const calculateTip = () => {
    let bill = parseFloat(billInput.value);
    let tip = null;
    let peopleCount = parseInt(peopleCountInput.value);

    if (customTipInput.value == 0) {
        tipOptionRadios.forEach(option => {
            if (option.checked) {
                tip = parseInt(option.value);
            }
        });
    } else {
        tip = parseInt(customTipInput.value);
    }

    // Calculate tip amount and total
    let tipAmount = (bill * (tip / 100)) / peopleCount;
    let total = (bill / peopleCount) + tipAmount;

    // Fill out results
    tipAmountOutput.textContent = tipAmount;
    totalOutput.textContent = total;
}

peopleCountInput.addEventListener('focusout', () => {
    inputsValidation();
    calculateTip();
});

billInput.addEventListener('focusout', () => {
    inputsValidation();
    calculateTip();
});

tipOptionRadios.forEach(option => {
    option.addEventListener('change', () => {
        inputsValidation();
        calculateTip();
    });
});

customTipInput.addEventListener('focusout', () => {
    inputsValidation();
    calculateTip();
});