// common function

function getPriceValueById(priceId) {
    const priceField = document.getElementById(priceId);
    const priceFieldValueString = priceField.innerText;
    const priceFieldValueAmount = parseFloat(priceFieldValueString);
    return priceFieldValueAmount;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValueAmount = parseFloat(elementValueString);
    return elementValueAmount;
}

function setTextElementValueById(elementId, newvalue) {
    const textElement = document.getElementById(elementId);
    const purchaseButton = document.getElementById('purchase-btn');
    const numericValue = newvalue;
    const formattedValue = numericValue.toFixed(2);
    textElement.innerText = formattedValue;

    if (newvalue > 0) {
        purchaseButton.removeAttribute('disabled');
    } else {
        purchaseButton.setAttribute('disabled', true);
    }
}

function addToCartList(nameOfItem) {
    console.log(nameOfItem);
    const listing = document.getElementById('cart-list');

    const count = listing.childElementCount + 1;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = count + ".  " + nameOfItem;

    listing.appendChild(p);
}

// card-1 (k.accessories)
document.getElementById('first-card').addEventListener('click', function () {
    const priceMoney = getPriceValueById('price1');

    const prevTotalMoney = getElementValueById('totalPrice');

    const newTotalMoney = prevTotalMoney + priceMoney;


    setTextElementValueById('totalPrice', newTotalMoney);
    setTextElementValueById('totalPayPrice', newTotalMoney);
    addToCartList('K. Accessories');
})

// card-2 (c.accessories)
document.getElementById('second-card').addEventListener('click', function () {
    const priceMoney = getPriceValueById('price2');

    const prevTotalMoney = getElementValueById('totalPrice');

    const newTotalMoney = prevTotalMoney + priceMoney;

    setTextElementValueById('totalPrice', newTotalMoney);
    setTextElementValueById('totalPayPrice', newTotalMoney);
    addToCartList('C. Accessories');
})

// card-3 (home cooker)
document.getElementById('third-card').addEventListener('click', function () {
    const priceMoney = getPriceValueById('price3');

    const prevTotalMoney = getElementValueById('totalPrice');

    const newTotalMoney = prevTotalMoney + priceMoney;

    setTextElementValueById('totalPrice', newTotalMoney);
    setTextElementValueById('totalPayPrice', newTotalMoney);
    addToCartList('Home Cooker');
})

// card-4 (sports black cap)
document.getElementById('fourth-card').addEventListener('click', function () {
    const priceMoney = getPriceValueById('price4');

    const prevTotalMoney = getElementValueById('totalPrice');

    const newTotalMoney = prevTotalMoney + priceMoney;

    setTextElementValueById('totalPrice', newTotalMoney);
    setTextElementValueById('totalPayPrice', newTotalMoney);
    addToCartList('Sports Black Cap');
})

// card-5 (full jersey set)
document.getElementById('fifth-card').addEventListener('click', function () {
    const priceMoney = getPriceValueById('price5');

    const prevTotalMoney = getElementValueById('totalPrice');

    const newTotalMoney = prevTotalMoney + priceMoney;

    setTextElementValueById('totalPrice', newTotalMoney);
    setTextElementValueById('totalPayPrice', newTotalMoney);
    addToCartList('Full Jersey Set');
})

// card-6 (sports cates)
document.getElementById('sixth-card').addEventListener('click', function () {
    const priceMoney = getPriceValueById('price6');

    const prevTotalMoney = getElementValueById('totalPrice');

    const newTotalMoney = prevTotalMoney + priceMoney;

    setTextElementValueById('totalPrice', newTotalMoney);
    setTextElementValueById('totalPayPrice', newTotalMoney);
    addToCartList('Sports Cates');
})