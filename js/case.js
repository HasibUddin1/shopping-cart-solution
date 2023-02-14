function updateCase(isIncrease){
    const caseInputFieldElement = document.getElementById('case-input-field');
    const caseInputFieldString = caseInputFieldElement.value;
    const previousCaseInputField = parseInt(caseInputFieldString);
    let newCaseInputField;
    if(isIncrease === true){
        newCaseInputField = previousCaseInputField + 1;
    }
    else{
        newCaseInputField = previousCaseInputField - 1;
    }
    caseInputFieldElement.value = newCaseInputField;

    return newCaseInputField;
}


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseInputValue = updateCase(true);
    const totalPrice = caseInputValue * 59;
    document.getElementById('case-total-amount').innerText = totalPrice;
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCase(false);
})