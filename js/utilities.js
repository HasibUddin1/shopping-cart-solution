function getSubTotal(){
    const phoneTotalPriceElement = document.getElementById('phone-total-price');
    const phoneTotalPriceString = phoneTotalPriceElement.innerText;
    const phoneTotalPrice = parseInt(phoneTotalPriceString);
    const caseTotalPriceElement = document.getElementById('case-total-amount');
    const caseTotalPriceString = caseTotalPriceElement.innerText;
    const caseTotalPrice = parseInt(caseTotalPriceString);

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = phoneTotalPrice + caseTotalPrice;
}