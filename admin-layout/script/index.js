var user = {}
var count = 0;
function toggle() {
    var sidenav = document.getElementById("sidenav");
    var section = document.getElementById("section");
    var topnav = document.getElementById("topnav");
    
    if(sidenav.style.width == "0px" || count==0) {

        sidenav.style.width = "250px";
        sidenav.style.transition = "0.3s";   
        topnav.style.left = "250px";   
        topnav.style.width = "100%"
        section.style.marginLeft = "250px";   
        section.style.width = "100%";   
        section.style.transition = "0.3s";
        topnav.style.transition = "0.3s";
        section.style.background = "rgba(0,0,0,0.3)";
        count = 1;


    }else {
        
     sidenav.style.width = "0px";
     sidenav.style.transition = "0.3s";
     section.style.marginLeft = "0px";
     section.style.width = "100%";
     topnav.style.left = "0px";
     topnav.style.width = "100%";
     section.style.transition = "0.3s";
     topnav.style.transition = "0.3s";
     section.style.background = "white";
     count = 0;
        
    }

}
function tab(active, inActive, activeBtn, inActiveBtn) {
    var active = document.getElementById(active);
    var inActive = document.getElementById(inActive);
    var inActiveBtn = document.getElementById(inActiveBtn);
    active.style.display = "flex";
    inActive.style.display = "none";
    activeBtn.style.background= "red"; 
    inActiveBtn.style.background = "dodgerblue";
    inActiveBtn.style.color = "white";
    
    
}
function signup(event) {
    event.preventDefault();
    
    var form = document.forms.register;

    var firstName = form.elements.firstname;
    var firstNameMessage = document.getElementById("firstname-message");

    var lastName = form.elements.lastname;
    var lastNameMessage = document.getElementById("lastname-message");

    var email = form.elements.email;
    var emailMessage = document.getElementById("email-message");

    var password = form.elements.password;
    var passwordMessage = document.getElementById("password-message");

     
    if(firstName.value.trim().length == 0) {
        firstNameMessage.style.display = "block";
        firstNameMessage.innerHTML = "This field is require";
        firstName.style.borderColor = "red";
    }
    else if(lastName.value.trim().length == 0) {
        lastNameMessage.style.display = "block";
        lastNameMessage.innerHTML = "This field is require";
        lastName.style.borderColor = "red";
        
    }
    else if(email.value.trim().length == 0) {
        emailMessage.style.display = "block";
        emailMessage.innerHTML = "This field is required";
        email.style.borderColor = "red";

    } 
    else if(password.value.trim().length == 0) {
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "This field is require";
        password.style.borderColor = "red";
    }
    else if(password.value.trim().length < 8) {
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "Minimum 8 character password";
        password.style.borderColor = "red";
    }
    else {
        Swal.fire({
            title: "Register success",
            icon: "success"
        });
        user.firstName = firstName.value.trim();
        user.lastName = lastName.value.trim();
        user.email = email.value.trim();
        user.password = password.value.trim();
        console.log(user);
    }
}

function onInputValidation(input, elementP) {
    var elementMessage = document.getElementById(elementP);
    input.style.borderColor = "dodgerblue";
    elementMessage.style.display = "none";
    
}
function togglePassword() {
    var password = document.getElementById("password");
    var eyeIcon = document.getElementById("eye-icon");
    if(password.type == "password") {
        password.type = "text";
        eyeIcon.className = "fa fa-eye-slash";
    }
    else {
        password.type = "password";
        eyeIcon.className = "fa fa-eye";
    }
}
function togglePassword(idOfInput) {
    var password = document.getElementById(idOfInput);
    var eyeIcon = document.getElementById("eye-icon");
    if(password.type == "password") {
        password.type = "text";
        eyeIcon.className = "fa fa-eye-slash";
    }
    else {
        password.type = "password";
        eyeIcon.className = "fa fa-eye";
    }
}
function signin(event) {
    event.preventDefault();
    var form = document.forms.login;
    var email = form.elements.email;
    var emailMessage = document.getElementById("login-email-message");
    var password = form.elements.password;
    var passwordMessage = document.getElementById("login-password-message");

    if(email.value.trim().length == 0) {
        email.style.borderColor = "red";
        emailMessage.style.display ="block";
        emailMessage.innerHTML = "This field is required";

    }
    else if(password.value.trim().length == 0) {
        password.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "This field is required";
    }
    else {
        user.email = email.value.trim();
        user.password = password.value.trim();
        console.log(user);
        Swal.fire({
            title: "Login success",
            icon: "success",
            
            showCloseButton: true
        })
       
    }
}

