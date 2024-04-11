// Fields
const billField = document.querySelector('#bill'),
    preDefindedTipFields = document.querySelectorAll('[name=tip]'),
    customTipField = document.querySelector('#custom-tip-input'),
    numPeopleField = document.querySelector('#num-people');

const validateInput = (input, inputLabel) => {
    if (input.value.length == 0) {
        document.querySelector(`#${inputLabel}-error`).textContent = "Can't be empty";
        return {
            'error': true,
            'message': "Can't be empty",
        }
    } else if (input.value == 0) {
        return {
            'error': true,
            'message': "Can't be zero",
        }
    }

    return {
        'error': false,
    }
};

numPeopleField.addEventListener('focusout', () => {
    validateInput(billField, 'bill');
});
