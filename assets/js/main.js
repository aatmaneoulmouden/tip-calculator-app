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

// const billInput = document.querySelector('#bill');
// const tipInputs = document.querySelectorAll('input[name=tip]');
// const numOfPeopleInput = document.querySelector('#num-people');



// const getTipValue = () => {
//     let tipValue;

//     if (document.querySelector('input[name=tip]#custom-tip-input').value.length == 0) {
//         tipValue = document.querySelector('input[name=tip]:checked').value;
//     } else {
//         tipValue = document.querySelector('input[name=tip]#custom-tip-input').value;
//     }

//     console.log(tipValue);
//     // return tipValue;
// };

// tipInputs.forEach(tipInput => {
//     tipInput.addEventListener('change', getTipValue);
// });

// billInput.addEventListener('input', () => {
//     // if(billInput.value.length > 0 && tip) {

//     // }
//     console.log(billInput.value);
// });

const preDefTipValues = document.querySelectorAll('.tip-option-value');
// const customTipValue = document.querySelector('#custom-tip-input');
let tipValue = null;

const updateTipValue = (newValue) => tipValue = newValue;

// const calculateTip = (bill, tip, peopleCount) => {
//     let tipAmount = (parseInt(bill) * (parseInt(tip) / 100)) / parseInt(peopleCount);
//     let total = (bill / peopleCount) + tipAmount;
//     return {
//         'tipAmount': tipAmount,
//         'total': total
//     }
// };

// preDefTipValues.forEach(tip => {
//     tip.addEventListener('change', () => {
//         let htip = updateTipValue(tip.value);
//         let result = calculateTip(100, htip, 5);
//         console.log(result);
//     });
// });

// customTipInput.addEventListener('input', () => {
//     updateTipValue(customTipInput.value);
// });
