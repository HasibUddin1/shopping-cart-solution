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

function updateCaseTotalPrice(caseInputValue){
    const totalPriceCalculation = caseInputValue * 59;
    const totalPrice = document.getElementById('case-total-amount');
    totalPrice.innerText = totalPriceCalculation
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseInputValue = updateCase(true);
    updateCaseTotalPrice(caseInputValue);
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseInputValue = updateCase(false);
    updateCaseTotalPrice(caseInputValue);
})