import { database } from "./config.js"; 
import { ref, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// ✅ Get user ID from session storage
const userId = sessionStorage.getItem("uid");

if (!userId) {
    window.location.href = "index.html"; // Redirect to login page if not logged in
} else {
    async function fetchUserData(uid) {
        try {
            // Display loading state
            document.getElementById("username").textContent = "Loading...";
            document.getElementById("email").textContent = "Loading...";
            document.getElementById("phone").textContent = "Loading...";

            const userRef = ref(database, "users/" + uid);
            const snapshot = await get(userRef);

            if (snapshot.exists()) {
                const userData = snapshot.val();
                document.getElementById("username").textContent = userData.username || "Unknown";
                document.getElementById("email").textContent = userData.email || "No Email";
                document.getElementById("phone").textContent = userData.phone || "Not Provided";
            } else {
                console.error("User data not found!");
                sessionStorage.clear(); // Clear session if user not found
                window.location.href = "index.html"; // Redirect to login
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    fetchUserData(userId);
}

// ✅ Logout function: Clears session and redirects to index.html
document.getElementById("logoutBtn").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "index.html";
});
