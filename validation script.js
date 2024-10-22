function validateForm() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    let errorMessage = document.getElementById("errorMessage");

    errorMessage.innerHTML = ""; // Clear previous errors

    // Name validation

    if (name === "") {

        errorMessage.innerHTML = "Name is required.<br>";

        return false;

    }

    // Email validation

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {

        errorMessage.innerHTML += "Email is required.<br>";

        return false;

    } else if (!email.match(emailPattern)) {

        errorMessage.innerHTML += "Please enter a valid email address.<br>";

        return false;

    }

    // Password validation

    if (password === "") {

        errorMessage.innerHTML += "Password is required.<br>";

        return false;

    } else if (password.length < 6) {

        errorMessage.innerHTML += "Password must be at least 6 characters long.<br>";

        return false;

    }

    // Confirm Password validation

    if (confirmPassword === "") {

        errorMessage.innerHTML += "Please confirm your password.<br>";

        return false;

    } else if (password !== confirmPassword) {

        errorMessage.innerHTML += "Passwords do not match.<br>";

        return false;

    }

    return true; // If no validation errors, submit the form

}