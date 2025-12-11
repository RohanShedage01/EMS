function signup() {
let user = document.getElementById("newUser").value;
let pass = document.getElementById("newPass").value;


if (user === "" || pass === "") {
alert("Please fill all fields.");
return;
}


localStorage.setItem("username", user);
localStorage.setItem("password", pass);


alert("Signup successful! Now login.");
window.location.href = "login.html";
}