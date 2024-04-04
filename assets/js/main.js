const tipOptionLabels = document.querySelectorAll('.tip-option label');
const customTipInput = document.querySelector('#custom-tip-input');

const removeSelectedClass = (toRemoveFromElements)=>{
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