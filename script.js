// Validations

// Getting Input Field Elements 
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var age = document.getElementById("Age");
var emails = document.getElementById("emails");
var pass = document.getElementById("pass");
var cpass = document.getElementById("Cpass");
var telNo = document.getElementById("telNo");

// Variables for each validation status
var fnameStat = false;
var lnameStat = false;
var ageStat = false;
var emailsStat = false;
var telStat = false;

function checkFName() {
    if(!fname.checkValidity()){
        fname.reportValidity();
        return false;
    } else {
        fnameStat = true;
        checkPassword();
    }
}

function checkLName() {
    if(!lname.checkValidity()){
        lname.reportValidity();
        return;
    } else {
        lnameStat = true;
        checkPassword();
    }
}

function checkAge() {
    if(!age.checkValidity()){
        age.reportValidity();
        return;
    } else {
        ageStat = true;
        checkPassword();
    }
    
}

function checkEmails() {
    if(!emails.checkValidity()){
        emails.reportValidity();
        return;
    } else {
        emailsStat = true;
        checkPassword();
    }
}

function checkTel() {
    if(!telNo.checkValidity()){
        telNo.reportValidity();
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled","disabled");
        return;
    } else {
        telStat = true;
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
            // Password is valid, enable submit button
            alert("Button Enabled");
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(129, 126, 126)';
            document.querySelector(".submitBtn").removeAttribute("disabled");
        } else {
            // Password is invalid, disable submit button
            alert("Password is mismatch or not according to the requirments");
            document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
            document.querySelector(".submitBtn").setAttribute("disabled","disabled");
        } 
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() === "") && (cpass.value.trim() !== "")) {
        alert("Password Field Is Empty, Please fill password field and then try again");
        document.querySelector(".submitBtn").style.backgroundColor = 'rgbrgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled","disabled");
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() !== "") && (cpass.value.trim() === "")) {
        alert("Confirm password field is Empty, Please fill confirm password field and then try again");
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(170, 168, 168)';
        document.querySelector(".submitBtn").setAttribute("disabled","disabled");
    } else if ((fnameStat) && (lnameStat) && (ageStat) && (emailsStat) && (pass.value.trim() === "") && (cpass.value.trim() === "")) {
        alert("Button Enabled");
        document.querySelector(".submitBtn").style.backgroundColor = 'rgb(129, 126, 126)';
        document.querySelector(".submitBtn").removeAttribute("disabled");
    }
}

function checkingCredentiels() {
    alert("Form Submitted");
}
