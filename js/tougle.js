const addMoney = document.getElementById("add-money");
const cashOut = document.getElementById("cash-out");
const transaction = document.getElementById("transaction");
const transferMoney = document.getElementById("transfer-money");
const payBill = document.getElementById("pay-bill");
const getBonus = document.getElementById("get-bonus");

addMoney.style.display = "block";
cashOut.style.display = "none";
transaction.style.display = "none";
transferMoney.style.display = "none";
payBill.style.display = "none";
getBonus.style.display = "none";

document.getElementById("add-money-card").addEventListener("click", function (event) {
    addMoney.style.display = "block";
    cashOut.style.display = "none";
    transaction.style.display = "none";
    transferMoney.style.display = "none";
    payBill.style.display = "none";
    getBonus.style.display = "none";
});

document.getElementById("cash-out-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "block";
    transaction.style.display = "none";
    transferMoney.style.display = "none";
    payBill.style.display = "none";
    getBonus.style.display = "none";
});

document.getElementById("transaction-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transaction.style.display = "block";
    transferMoney.style.display = "none";
    payBill.style.display = "none";
    getBonus.style.display = "none";
});

document.getElementById("transfer-money-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transaction.style.display = "none";
    transferMoney.style.display = "block";
    payBill.style.display = "none";
    getBonus.style.display = "none";
});

document.getElementById("pay-bill-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transaction.style.display = "none";
    transferMoney.style.display = "none";
    payBill.style.display = "block";
    getBonus.style.display = "none";
});

document.getElementById("get-bonus-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transaction.style.display = "none";
    transferMoney.style.display = "none";
    payBill.style.display = "none";
    getBonus.style.display = "block";
});


document.getElementById("logout-btn").addEventListener("click", function (event) {
    window.location.href = "index.html";
});