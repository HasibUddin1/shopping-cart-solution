function updatePhoneAmount(isIncrease){
    const phoneInputFieldElement = document.getElementById('phone-input-field');
    const phoneInputFieldString = phoneInputFieldElement.value;
    const previousPhoneInputField = parseInt(phoneInputFieldString);

    let phoneAmount;
    if(isIncrease === true){
        phoneAmount = previousPhoneInputField + 1;
    }
    else{
        phoneAmount = previousPhoneInputField - 1;
    }
    phoneInputFieldElement.value = phoneAmount;
    return phoneAmount;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneInputField = updatePhoneAmount(true);
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneInputField = updatePhoneAmount(false);
})