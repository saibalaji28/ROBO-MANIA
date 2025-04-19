// Dark and light mode toggle
function toggleMode() {
    const body = document.getElementById('body');
    const isDark = body.classList.toggle('dark-mode');

    if (isDark) {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffffff";
    } else {
        body.style.backgroundColor = "#f4f4f9";
        body.style.color = "#333";
    }
}

// Clock functionality
function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) {
        let now = new Date();
        clock.innerText = now.toLocaleTimeString();
    }
}
setInterval(updateClock, 1000);
updateClock(); // run once immediately

// Login validation and redirect
function validate() {
    const correctUsername = "sai balaji";
    const correctPassword = "balaji123";

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("para");

    // Clear previous error messages
    errorMessage.innerHTML = "";

    if (usernameInput.value.trim() === "") {
        errorMessage.innerHTML = "Username is required.";
        return false;
    }

    if (usernameInput.value.length < 3) {
        errorMessage.innerHTML = "Username must be at least 3 characters long.";
        return false;
    }

    if (usernameInput.value !== correctUsername || passwordInput.value !== correctPassword) {
        errorMessage.innerHTML = "Invalid username or password.";
        return false;
    }

    // Redirect to homepage.html on successful login
    window.location.href = "homepage.html";
    return false; // prevent default form submission
}