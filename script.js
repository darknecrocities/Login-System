document.addEventListener("DOMContentLoaded", function() {
    // Add animation effect to buttons on hover
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Simulate a user database (For demonstration purposes, using localStorage)
    if (!localStorage.getItem('userDatabase')) {
        localStorage.setItem('userDatabase', JSON.stringify({}));
    }

    // Handle form submissions
    window.handleLogin = function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Basic client-side validation (for demonstration)
        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return false;
        }

        // Retrieve user database from localStorage
        const userDatabase = JSON.parse(localStorage.getItem('userDatabase'));

        // Check if user is registered
        if (!userDatabase[email] || userDatabase[email] !== password) {
            alert("Invalid login. Please sign up first or check your credentials.");
            return false;
        }

        alert("Logged in successfully!");
        // Redirect to welcome page
        window.location.href = 'index3.html';
        return true;
    };

    window.handleSignup = function(event) {
        event.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Basic client-side validation (for demonstration)
        if (email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        // Retrieve user database from localStorage
        const userDatabase = JSON.parse(localStorage.getItem('userDatabase'));

        // Register the user
        if (userDatabase[email]) {
            alert("Email already registered. Please log in.");
            return false;
        }

        userDatabase[email] = password;
        localStorage.setItem('userDatabase', JSON.stringify(userDatabase));

        alert("Signed up successfully!");
        // Here you would normally send the signup data to the server
        // For demonstration, redirect to the login page
        window.location.href = 'index.html';
        return true;
    };
});
