// c)	Write a JS function to validate contents of a form –
//  the form should have at least one mandatory numerical field and
// one field to be checked with a regular expression 
//  (e.g. an e-mail). Fields not passing validation should have their style modified to inform the user.
//  The JS function should return false if form fails validation, true if it passes. 
function validateForm() {
    var numField = document.forms[""].value;
    var numField = document.forms["phone"].value;
    //    1
    if (numField == "") {
        alert(" must be filled out");
        return false;
    }
    // 2
    var phoneNumber = document.getElementById('phone-number').value;
    var phoneRGEX = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber);
    alert("phone:" + phoneResult);

}