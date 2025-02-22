import { signup, login } from "./auth.js";

// Register Button Click
document.getElementById("registerBtn").addEventListener("click", () => {
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phone = document.getElementById("registerPhone").value;
    
    signup(username, email, password, phone);
});

// Login Button Click
document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    
    login(email, password);
});
