var user_Name = [];
var user_Email = [];
var user_Password = [];

function signUpInformation() {

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    
    user_Name.push(userName);
    user_Email.push(userEmail);
    user_Password.push(userPassword);
    localStorage.setItem("name", JSON.stringify(user_Name));
    localStorage.setItem("email",  JSON.stringify (user_Email));
    localStorage.setItem("password",  JSON.stringify(user_Password));
    // console.log(user_Name)
    alert("SignUp success");
    window.location.href="./login.html"
    return false;
}

let names = JSON.parse(localStorage.getItem("name"))
let emails = JSON.parse(localStorage.getItem("email"))
let passwords = JSON.parse(localStorage.getItem("password"))

function login() {
    const userEmail= document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    let isFound = false

    for (i = 0; i < emails.length; i++) {

        if ( userEmail === emails[i]) {

            isFound = i;
            break;
        }
    }

    if (isFound === false) {
        alert("user not found")
    } else if (passwords[isFound] === password) {
        alert("login success");
        window.location.href="./dashboard.html"
    } else{
        alert("Error Password or Username")


    }

    return false;
}