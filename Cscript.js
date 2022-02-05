"use strict"
 
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let addr = document.getElementById("address");
let cityInput= document.getElementById("city");
let pcode = document.getElementById("postal");
let prov = document.getElementById("province");
let ageInput = document.getElementById("age");
let password = document.getElementById("passwordinput");
let confirm = document.getElementById("confirmation");
let emailInput = document.getElementById("email");

function validate(){
    if(verifyPassword() && validateEmail() && validatePostalCode()){
        alert("Thanks for registering with our website, your customer record has been successfully recorded!");
        return true;
    }
	else{
	alert("Please ensure all fields are filled properly!");
	return false;
	}
}

function age(){
    var ageinput = document.getElementById("age").value;
    if(ageinput < 18){
        alert("A minimum of 18 years is requiered!");
		return false;
    }
	return true;
} 

function validateEmail(){
    var emailInput = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailInput.match(mailformat)){
        return true;
    }
    else{
        alert('Please enter a valid email address!');
        document.getElementById("email").focus();
        return false;
    }
}
function validatePostalCode(){
    var codeInput = pcode.value;
    var codeformat = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;;

    if(codeInput.match(codeformat)){
        return true;
    }
    else{
        alert("Please use Canada's a0a0a0 format!");
        pcode.focus();
        return false;
    }
}


function verifyPassword(){
    var password = document.getElementById("passwordinput").value;
    var confirm = document.getElementById("confirmation").value;
    if(password == ""){
        alert("**Please enter a password!**");
        return false;    
    }

    if(password.length < 6){
        alert("**Password must be atleast 6 characters**");
        return false;
    }

    if (password !== confirm){
        alert("**Passwords did not match!**");  
        return false;
    }
    return true;
    
}

function createEventListeners(){
    var subButton = document.getElementById("submitbutton");
    var ageinput = document.getElementById("age");
    if(subButton.addEventListener){
        subButton.addEventListener("click", validate, false);
    }
    else if (subButton.attachEvent){
        subButton.attachEvent("onclick", validate);
    }

    if(ageinput.addEventListener){
        ageinput.addEventListener("onchange", age, false);
    }
    else if (ageinput.attachEvent){
        ageinput.attachEvent("onchange", age);
    }
}

