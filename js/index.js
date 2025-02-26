document.getElementById("login-btn").addEventListener("click", function (event) {
    const mobileNumber = document.getElementById("mobile").value;
    const pinNumber = document.getElementById("pin").value;
    if (mobileNumber.length === 11) {
        if (pinNumber.length === 4) {
            window.location.href = "main.html";
        }
        else {
            alert("Invalid Pin Number");
        }
    }
    else {
        alert("Invalid Mobile Number");
    }
});
