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

                const div = document.getElementById("transaction-history");
                const newDiv = `
                <div class="flex justify-between items-center py-3 px-4 my-2 bg-white rounded-lg">
                    <div class="flex justify-between items-center gap-1">
                        <img class="w-12" src="assets/payoo.png" alt="Payoo">
                        <div>
                            <h1 class="font-semibold">Add Money</h1>
                            <p class="text-xs">${addMoneyFrom}</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>  
                </div>
                `
                div.innerHTML += newDiv;

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

                const div = document.getElementById("transaction-history");
                const newDiv = `
                <div class="flex justify-between items-center py-3 px-4 my-2 bg-white rounded-lg">
                    <div class="flex justify-between items-center gap-1">
                        <img class="w-12" src="assets/payoo.png" alt="Payoo">
                        <div>
                            <h1 class="font-semibold">Withdraw</h1>
                            <p class="text-xs">${withdrawMoneyTo}</p>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>  
                </div>
                `
                div.innerHTML += newDiv;

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
