document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseInputFieldElement = document.getElementById('case-input-field');
    const caseInputFieldString = caseInputFieldElement.value;
    const previousCaseInputField = parseInt(caseInputFieldString);
    const newCaseInputField = previousCaseInputField + 1;

    caseInputFieldElement.value = newCaseInputField;
})