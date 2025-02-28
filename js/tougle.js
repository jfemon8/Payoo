const addMoney = document.getElementById("add-money");
const cashOut = document.getElementById("cash-out");
const transaction = document.getElementById("transaction");

addMoney.style.display = "block";
cashOut.style.display = "none";
transaction.style.display = "none";

document.getElementById("add-money-card").addEventListener("click", function (event) {
    addMoney.style.display = "block";
    cashOut.style.display = "none";
    transaction.style.display = "none";
});

document.getElementById("cash-out-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "block";
    transaction.style.display = "none";
});

document.getElementById("transaction-card").addEventListener("click", function (event) {
    addMoney.style.display = "none";
    cashOut.style.display = "none";
    transaction.style.display = "block";
});


document.getElementById("logout-btn").addEventListener("click", function (event) {
    window.location.href = "index.html";
});