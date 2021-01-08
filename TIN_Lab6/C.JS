// c)	Write a JS function to validate contents of a form –
//  the form should have at least one mandatory numerical field and
// one field to be checked with a regular expression 
//  (e.g. an e-mail). Fields not passing validation should have their style modified to inform the user.
//  The JS function should return false if form fails validation, true if it passes. 
function validateForm() {
    var studentNumber = document.forms["myForm"]["studentNumber"].value;
    var studentEmail = document.forms["myForm"]["email"].value;
    var varId = document.getElementById("idInput").style.backgroundColor;
    var varEmail = document.getElementById("emailInput").style.backgroundColor;

    if(studentNumber == "" && studentEmail == "") {
        document.getElementById("idInput").style.backgroundColor = "red";
        document.getElementById("emailInput").style.backgroundColor = "red";
        varEmail = "red";
        alert("Either student number and email must be filled");
        return false;
    }
    else {
        document.getElementById("idInput").style.backgroundColor = "";
        document.getElementById("emailInput").style.backgroundColor = "";
    }

    
    if(!validateStudentNumber(studentNumber))
    {
        document.getElementById("idInput").style.backgroundColor = "red";
        alert("The student number is incorrect");
        return false;
    }
    else {
        document.getElementById("idInput").style.backgroundColor = "";
    }

    if(!validateEmail(studentEmail))
    {
        document.getElementById("emailInput").style.backgroundColor = "red";
        alert("The email is incorrect");
        return false;
    }
    else {
        document.getElementById("emailInput").style.backgroundColor = "";
    }

    return true;
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateStudentNumber(number) {
    var re = /^[A-z]{1}[0-9]{1,}$/g;
    return re.test(number);
}