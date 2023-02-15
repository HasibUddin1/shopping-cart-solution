function getSubTotal(){
    const phoneTotalPriceElement = document.getElementById('phone-total-price');
    const phoneTotalPriceString = phoneTotalPriceElement.innerText;
    const phoneTotalPrice = parseInt(phoneTotalPriceString);
    const caseTotalPriceElement = document.getElementById('case-total-amount');
    const caseTotalPriceString = caseTotalPriceElement.innerText;
    const caseTotalPrice = parseInt(caseTotalPriceString);

    const subTotalElement = document.getElementById('sub-total');
    const subTotalString = subTotalElement.innerText;
    const subTotal = parseInt(subTotalString);
    const currentSubTotal = phoneTotalPrice + caseTotalPrice;
    subTotalElement.innerText = currentSubTotal;

    // tax amount and total amount calculation
    
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    document.getElementById('tax-amount').innerText = taxAmount;

    const totalAmount = currentSubTotal + taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;
}