document.addEventListener("DOMContentLoaded", () => {
    const username = sessionStorage.getItem("username");
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");

    if (username) document.getElementById("username").textContent = username;
    if (email) document.getElementById("email").textContent = email;
    if (phone) document.getElementById("phone").textContent = phone;

    document.getElementById("logoutBtn").addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "index.html"; // Redirect to login page
    });
});
