function login() {
let user = document.getElementById("loginUser").value;
let pass = document.getElementById("loginPass").value;


let savedUser = localStorage.getItem("username");
let savedPass = localStorage.getItem("password");


if (user === savedUser && pass === savedPass) {
alert("Login Successful!");
window.location.href = "index.html";
} else {
alert("Invalid credentials!");
}
}