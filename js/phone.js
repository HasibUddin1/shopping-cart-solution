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

function updatePhonePrice(phoneInputField){
    const phoneTotalPriceElement = document.getElementById('phone-total-price');
    const phoneTotalPrice = phoneInputField * 1219;
    phoneTotalPriceElement.innerText = phoneTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneInputField = updatePhoneAmount(true);
    updatePhonePrice(phoneInputField);
    getSubTotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneInputField = updatePhoneAmount(false);
    updatePhonePrice(phoneInputField);
    getSubTotal();
})