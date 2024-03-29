const container = document.getElementById("container");
const registerBtn = document.getElementById("register-btn")
const loginBtn = document.getElementById("login-btn")

registerBtn.addEventListener('click', function() {
    container.classList.add("active");
});

loginBtn.addEventListener('click', function() {
    container.classList.remove("active");
});