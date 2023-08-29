// LARGE DEVICE coupon box

document.getElementById('coupon-text').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const couponButton = document.getElementById('coupon');

    if (text === 'SELL200') {
        couponButton.removeAttribute('disabled');
    } else {
        couponButton.setAttribute('disabled', true);
    }

});



document.getElementById('coupon').addEventListener('click', function () {
    const totalPriceElement = document.getElementById('totalPrice');
    const discountPriceElement = document.getElementById('discountPrice');
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const couponText = document.getElementById('coupon-text');
    const totalPayPrice = document.getElementById('totalPayPrice');

    if (totalPrice >= 200) {
        const discountAmount = totalPrice * 0.2;
        const newTotalPrice = discountAmount;
        discountPriceElement.innerText = newTotalPrice.toFixed(2);
        const newTotalPayPrice = totalPrice - discountAmount;
        totalPayPrice.innerText = newTotalPayPrice.toFixed(2);
        couponText.value = '';
    }

    if (totalPrice < 200) {
        couponText.value = '';
        alert('You have to buy 200tk or above to get discount!');

    }


});


// small device coupon box

document.getElementById('coupon-text2').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const couponButton = document.getElementById('coupon2');

    if (text === 'SELL200') {
        couponButton.removeAttribute('disabled');
    } else {
        couponButton.setAttribute('disabled', true);
    }

});



document.getElementById('coupon2').addEventListener('click', function () {
    const totalPriceElement = document.getElementById('totalPrice');
    const discountPriceElement = document.getElementById('discountPrice');
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const couponText = document.getElementById('coupon-text2');
    const totalPayPrice = document.getElementById('totalPayPrice');

    if (totalPrice >= 200) {
        const discountAmount = totalPrice * 0.2;
        const newTotalPrice = discountAmount;
        discountPriceElement.innerText = newTotalPrice.toFixed(2);
        const newTotalPayPrice = totalPrice - discountAmount;
        totalPayPrice.innerText = newTotalPayPrice.toFixed(2);
        couponText.value = '';
    }

    if (totalPrice < 200) {
        couponText.value = '';
        alert('You have to buy 200tk or above to get discount!');

    }


});

document.getElementById("goHomeButton").addEventListener("click", function () {
    // Reload the page
    location.reload();
});


// purchase button usable

