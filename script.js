// Validations

// Getting Input Field Elements 
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var age = document.getElementById("Age");
var emails = document.getElementById("emails");
var pass = document.getElementById("pass");
var cpass = document.getElementById("Cpass");
var telNo = document.getElementById("telNo");
var passError = document.getElementById('passError');
var cpassError = document.getElementById('cpassError');
var telError = document.getElementById('telError');

// Variables for each validation status
var fnameStat = false;
var lnameStat = false;
var ageStat = false;
var emailsStat = false;
var telStat = false;

function checkFName() {
    if (!fname.checkValidity()) {
        fname.reportValidity();
        return false;
    } else {
        fnameStat = true;
        checkPassword();
    }
}

function checkLName() {
    if (!lname.checkValidity()) {
        lname.reportValidity();
        return;
    } else {
        lnameStat = true;
        checkPassword();
    }
}

function checkAge() {
    if (!age.checkValidity()) {
        age.reportValidity();
        return;
    } else {
        ageStat = true;
        checkPassword();
    }
}

function checkEmails() {
    if (!emails.checkValidity()) {
        emails.reportValidity();
        return;
    } else {
        emailsStat = true;
        checkPassword();
    }
}

function checkTel() {
    if (!telNo.checkValidity()) {
        telError.textContent = "Please follow the Pattern . (03** - *******) with 11 digits.";
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        return;
    } else {
        telStat = true;
        checkPassword();
    }
}

function checkPasswordField() {
    if ((pass.value.trim() !== "") && (cpass.value.trim() !== "")) {
        checkPassword();
    }
}

// CHECKING PASSWORDS AFTER ALL VALIDATIONS

function checkPassword() {
    if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() !== "") && (cpass.value.trim() !== "")) {
        var password = pass.value.trim();
        var confirmPassword = cpass.value.trim();

        // Check if password meets all criteria
        var passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
        var passwordsMatch = password === confirmPassword;

        if (passwordValid && passwordsMatch) {
            if (document.querySelector(".submitBtn").disabled) {
                // Password is valid, enable submit button
                passError.textContent = "";
                cpassError.textContent = "";
                document.querySelector(".submitBtn").style.backgroundColor = 'rgb(129, 126, 126)';
                document.querySelector(".submitBtn").removeAttribute("disabled");
            }
        } else {
            if (!passwordValid){
                // Password is invalid, disable submit button
                passError.textContent = "Password should have min length of 8. Should have both alphanumeric, should have at least one upper case and one the lower case.";
                cpassError.textContent = "Password should have min length of 8. Should have both alphanumeric, should have at least one upper case and one the lower case.";
            } else if (!passwordsMatch) {
                passError.textContent = "Password Mis-Matched";
                cpassError.textContent = "Password Mis-Matched";
            }
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() === "") && (cpass.value.trim() !== "")) {
        // Password is invalid, disable submit button
        passError.textContent = "Please enter a password";
        cpassError.textContent = "Please enter a password";
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() !== "") && (cpass.value.trim() === "")) {
        // Password is invalid, disable submit button
        passError.textContent = "Please confirm your password";
        cpassError.textContent = "Please confirm your password";
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() === "") && (cpass.value.trim() === "")) {
        if (document.querySelector(".submitBtn").disabled) {
            // Password is valid, enable submit button
            passError.textContent = "";
            cpassError.textContent = "";
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(129, 126, 126)';
            document.querySelector(".submitBtn").removeAttribute("disabled");
        }
    }
}

function checkingCredentials() {
    alert("Form Submitted");
}
