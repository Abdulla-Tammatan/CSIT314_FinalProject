//This function validates the details entered by the user.
function validateForm() {
    //EMAIL VALIDATION 
    var eml = document.getElementById("email").value;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (regex.test(eml) == false) {
        document.getElementById("emailError").innerHTML = "Invalid Email Address.";
        return false;
    }
    else { document.getElementById("emailError").innerHTML = ""; }

    //PHONE VALIDATION 
    var phone = document.getElementById("phone").value;
    let phCheck = new RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$');

    if (phCheck.test(phone) == false) {
        document.getElementById("phoneError").innerHTML = "Invalid Number.";
        return false;
    }
    else { document.getElementById("phoneError").innerHTML = ""; }

    //USERNAME VALIDATION
    var input1 = document.getElementById("username").value;
    if (/^[A-Za-z0-9]{5,15}$/.test(input1) == false) {
        document.getElementById("usernameError").innerHTML = "Username cannot have special characters and has to be atleast 5 characters long";
        return false;
    }
    else {
        document.getElementById("usernameError").innerHTML = "";
    }

    //PASSWORD VALIDATION 
    var password = document.getElementById("password").value;
    if (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password) == false) {
        document.getElementById("passError").innerHTML = "Password should have atleast one special character and one number and should be 8-16 characters long.";
        return false;
    }
    else { document.getElementById("passError").innerHTML = ""; }

    return true;
}

function toggle() {
    var temp = document.getElementById("password");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}

