import { auth, database } from "./firebaseConfig.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { ref, set, get } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// ✅ Signup Function (Registers user and stores additional details)
async function signup(username, email, password, phone) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store additional user data in Firebase Database
        await set(ref(database, `users/${user.uid}`), {
            username,
            email,
            phone
        });

        alert("Signup Successful! Please log in.");
        document.getElementById('loginAuth').style.display = 'block';
    } catch (error) {
        alert(getFriendlyErrorMessage(error.code));
    }
}

// ✅ Login Function (Authenticates and fetches user details)
async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userRef = ref(database, `users/${user.uid}`);

        // Fetch user details from the database
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
            const userData = snapshot.val();

            // ✅ Store user details in session storage
            sessionStorage.setItem("uid", user.uid);
            sessionStorage.setItem("username", userData.username);
            sessionStorage.setItem("email", userData.email);
            sessionStorage.setItem("phone", userData.phone);

            alert(`Login Successful! Welcome ${userData.username}`);
            window.location.href = "user.html"; // Redirect to home page
        } else {
            alert("User data not found!");
        }
    } catch (error) {
        alert(getFriendlyErrorMessage(error.code));
    }
}

// ✅ Function to map Firebase errors to user-friendly messages
function getFriendlyErrorMessage(errorCode) {
    const errorMessages = {
        "auth/invalid-email": "Invalid email format. Please check your email.",
        "auth/user-not-found": "No account found with this email. Please sign up.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/email-already-in-use": "This email is already registered. Try logging in.",
        "auth/network-request-failed": "Network failure. Please check your internet connection.",
        "auth/weak-password": "Password is too weak. Use a stronger password.",
        "auth/missing-password": "Password cannot be empty. Please enter a password.",
        "auth/too-many-requests": "Too many failed attempts. Try again later.",
        "auth/internal-error": "An internal error occurred. Please try again later."
    };

    return errorMessages[errorCode] || "An unexpected error occurred. Please try again.";
}

// ✅ Export functions
export { signup, login };
