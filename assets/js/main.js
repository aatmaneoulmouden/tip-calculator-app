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
const resetBtn = document.querySelector('#reset-btn');

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
    // Error messages
    let errMessages = {
        'empty': "Can't be empty",
        'zero': "Can't be zero",
    }

    // Bill input validation
    if (billInput.value.length == 0) {
        document.querySelector('#bill-error').textContent = errMessages.empty;
        billInput.classList.add('has-error');
    } else {
        document.querySelector('#bill-error').textContent = '';
        billInput.classList.remove('has-error');
    }

    // Num of People input validation
    if (peopleCountInput.value.length == 0) {
        document.querySelector('#num-people-error').textContent = errMessages.empty;
        peopleCountInput.classList.add('has-error');
    } else if (peopleCountInput.value == 0) {
        document.querySelector('#num-people-error').textContent = errMessages.zero;
        peopleCountInput.classList.add('has-error');
    } else {
        document.querySelector('#num-people-error').textContent = '';
        peopleCountInput.classList.remove('has-error');
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
    let tipAmount = 0;
    let total = 0;
    if (billInput.value.length == 0 || (peopleCountInput.value.length == 0 || peopleCountInput.value == 0)) {
        tipAmount = 0;
        total = 0;
    } else {
        tipAmount = (bill * (tip / 100)) / peopleCount;
        total = (bill / peopleCount) + tipAmount;
    }

    // Fill out results
    tipAmountOutput.textContent = tipAmount.toFixed(2);
    totalOutput.textContent = total.toFixed(2);
}

peopleCountInput.addEventListener('focusout', () => {
    inputsValidation();
    calculateTip();
});

peopleCountInput.addEventListener('input', inputsValidation);

billInput.addEventListener('focusout', () => {
    inputsValidation();
    calculateTip();
});

billInput.addEventListener('input', inputsValidation);

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

resetBtn.addEventListener('click', () => {
    // Clear inputs
    billInput.value = '';
    customTipInput.value = '';
    peopleCountInput.value = '';

    // Clear output
    tipAmountOutput.textContent = '0.00';
    totalOutput.textContent = '0.00';
});