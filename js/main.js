document.getElementById("add-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyFrom = document.getElementById("add-money-from").value;
    const addAmountInput = document.getElementById("add-amount");
    const addAmount = parseFloat(addAmountInput.value);
    const addPinInput = document.getElementById("add-pin");
    const addPin = addPinInput.value;

    if (addAmount > 0) {
        if (addMoneyFrom.length === 11) {
            if (addPin.length === 4) {
                const balance = document.getElementById("balance");
                const convertedBalance = parseFloat(balance.innerText);
                const total = convertedBalance + addAmount;
                balance.innerText = total;

                addAmountInput.value = "";
                addPinInput.value = "";
            } else {
                alert("Invalid Pin Number");
            }
        } else {
            alert("Invalid Bank Account Number");
        }
    } else {
        alert("Invalid Amount");
    }
});


document.getElementById("withdraw-money-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const withdrawMoneyTo = document.getElementById("withdraw-money-to").value;
    const withdrawAmountInput = document.getElementById("withdraw-amount");
    const withdrawAmount = parseFloat(withdrawAmountInput.value);
    const withdrawPinInput = document.getElementById("withdraw-pin");
    const withdrawPin = withdrawPinInput.value;

    const balance = document.getElementById("balance");
    const convertedBalance = parseFloat(balance.innerText);

    if (withdrawAmount <= convertedBalance) {
        if (withdrawMoneyTo.length === 11) {
            if (withdrawPin.length === 4) {
                const total = convertedBalance - withdrawAmount;
                balance.innerText = total;

                withdrawAmountInput.value = "";
                withdrawPinInput.value = "";
            } else {
                alert("Invalid Pin Number");
            }
        } else {
            alert("Invalid Bank Account Number");
        }
    } else {
        alert("Not Enough Balance");
    }
});
