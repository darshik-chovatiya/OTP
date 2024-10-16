let btn = document.querySelector('.btn');
let otp = Math.floor(1000 + Math.random() * 9000);
let otpNumber = document.querySelector('.otp-number');
otpNumber.textContent = otp;

btn.addEventListener('click', () => {
    let input = document.querySelector('.otp-input').value;

    if (!input) {
        alert('Please enter the OTP');
        return;
    }

    if (otp == input) {
        alert('Correct OTP!');
        location.reload();  // Reloads the page
    } else {
        alert('Incorrect OTP, please try again.');
    }
});
