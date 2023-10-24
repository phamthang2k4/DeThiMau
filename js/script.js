// coding implementation
function validateForm() {
    let email = document.myForm.email.value;
    let rating = document.myForm.rate.value;
    let comment = document.myForm.com.value;
    let errors = [];

    let emailRegex = /[@]/;
    if (!emailRegex.test(email)) {
        errors.push("Email error");
        document.getElementById("email").style.border="2px solid red";
    }
    else{
        document.getElementById("email").style.border="2px solid green";
    }

    if (isNaN(rating) || rating === "") {
        errors.push("Rating error");
        document.getElementById("rate").style.border="2px solid red";
    }
    else{
        document.getElementById("rate").style.border="2px solid green";
    }

    if(comment==""){
        errors.push("Comment must be filled out.");
        document.getElementById("com").style.border="2px solid red";
    }
    else{
        document.getElementById("com").style.border="2px solid green";
    }

    if (email === "" || rating === "" || comment === "") {
        errors.push("NOTE : All information must be filled out!");
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }
    else{
        alert("Successful!!!")
    }

    return true;
}

function reportErrors(errors) {
    let errorOut = "ERROR:\n";
    for (let i = 0; i < errors.length; i++) {
        errorOut += errors[i] + "\n";
    }
    alert(errorOut);
}
// end coding implementation