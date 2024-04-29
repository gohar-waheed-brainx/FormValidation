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
var fnameError = document.getElementById('fnameError');
var lnameError = document.getElementById('lnameError');
var ageError = document.getElementById('ageError');
var emailsError = document.getElementById('emailsError');

// Variables for each validation status
var fnameStat = false;
var lnameStat = false;
var ageStat = false;
var emailsStat = false;
var telStat = true;
var passCheck = true;

function checkFName() {
    if (!fname.checkValidity()) {
        fnameStat = false;
        fnameError.textContent = "First Name feild is required";
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
        return;
    } else {
        fnameError.textContent = "";
        fnameStat = true;
        checkPassword();
    }
}

function checkLName() {
    if (!lname.checkValidity()) {
        lnameStat = false;
        lnameError.textContent = "Last Name feild is required";
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
    } else {
        lnameError.textContent = "";
        lnameStat = true;
        checkPassword();
    }
}

function checkAge() {
    if (!age.checkValidity()) {
        ageStat = false;
        ageError.textContent = "Age Field is Required and Age should be 18 to 151";
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
        return;
    } else {
        ageError.textContent = "";
        ageStat = true;
        checkPassword();
    }
}

function checkEmails() {
    if (!emails.checkValidity()) {
        emailsStat = false;
        emailsError.textContent = "Please follow the email syntax rule. (example@domain.com)";
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
        return;
    } else {
        emailsError.textContent = "";
        emailsStat = true;
        checkPassword();
    }
}

function checkTel() {
    if (!telNo.checkValidity()) { 
        telStat = false;
        telError.textContent = "Please follow the Pattern . (03** - *******) with 11 digits.";
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        return;
    } else {
        telError.textContent = "";
        telStat = true;
        checkPassword();
    }
}

function checkPasswordField() {
    if ((pass.value.trim() !== "") && (cpass.value.trim() !== "")) {
        passCheck = false;
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
        checkPassword();
    } else if ((pass.value.trim() !== "") && (cpass.value.trim() === "")) {
        passCheck = false;
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
        cpassError.textContent = "Please Fill Confirm Password";
    } else if ((pass.value.trim() === "") && (cpass.value.trim() !== "")) {
        passCheck = false;
        if (!document.querySelector(".submitBtn").disabled) {
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
        passError.textContent = "Please Fill Password Field";
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
                passCheck = true;
                // Password is valid, enable submit button
                passError.textContent = "";
                cpassError.textContent = "";
                document.querySelector(".submitBtn").style.backgroundColor = 'rgb(129, 126, 126)';
                document.querySelector(".submitBtn").removeAttribute("disabled");
            }
        } else {
            if (!passwordValid){
                passCheck = false;
                // Password is invalid, disable submit button
                passError.textContent = "Password should have min length of 8. Should have both alphanumeric, should have at least one upper case and one the lower case.";
                cpassError.textContent = "Password should have min length of 8. Should have both alphanumeric, should have at least one upper case and one the lower case.";
            } else if (!passwordsMatch) {
                passCheck = false;
                passError.textContent = "Password Mis-Matched";
                cpassError.textContent = "Password Mis-Matched";
            }
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
        }
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() === "") && (cpass.value.trim() !== "")) {
        passCheck = false;
        // Password is invalid, disable submit button
        passError.textContent = "Please enter a password";
        cpassError.textContent = "Please enter a password";
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() !== "") && (cpass.value.trim() === "")) {
        passCheck = false;
        // Password is invalid, disable submit button
        passError.textContent = "Please confirm your password";
        cpassError.textContent = "Please confirm your password";
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() === "") && (cpass.value.trim() === "")) {
        if (document.querySelector(".submitBtn").disabled) {
            passCheck = true;
            // Password is valid, enable submit button
            passError.textContent = "";
            cpassError.textContent = "";
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(129, 126, 126)';
            document.querySelector(".submitBtn").removeAttribute("disabled");
        }
    }
}

function checkingCredentials() {
    if (passCheck && fnameStat && lnameStat && ageStat && emailsStat && telStat){
        alert("Form Submitted");
    } else {
        alert("Please Validate all fields before submission");
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled", "disabled");
    }
}
