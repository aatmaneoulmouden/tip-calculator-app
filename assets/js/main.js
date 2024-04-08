/**
 * This script adds event listeners to a set of tip option labels and a custom tip input, removing the
 * 'selected' class from all labels when one is clicked, and removing the 'selected' class when the
 * custom tip input is focused.
 */
const tipOptionLabels = document.querySelectorAll('.tip-option label');
const customTipInput = document.querySelector('#custom-tip-input');

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


/**
 * Calculate the correct tip and total cost of the bill per person
 */

const billInput = document.querySelector('#bill');
const tipInputs = document.querySelectorAll('input[name=tip]');
const numOfPeopleInput = document.querySelector('#num-people');

const calculateTip = (bill, tip, peopleCount) => {
    let tipAmount = (bill * (tip / 100)) / peopleCount;
    let total = (bill / peopleCount) + tipAmount;
    return {
        'tipAmount': tipAmount,
        'total': total
    }
};