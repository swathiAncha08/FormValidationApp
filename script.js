const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateInputs()) {
        alert("✅ Registration Successful!");
        form.reset();
        removeSuccessStyles();
    }
});

function validateInputs() {
    let isValid = true;

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
        setError(username, "Full Name is required");
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Email is required");
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Enter a valid email");
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
        isValid = false;
    } else if (passwordValue.length < 6) {
        setError(password, "Password must be at least 6 characters");
        isValid = false;
    } else {
        setSuccess(password);
    }

    return isValid;
}

function setError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function removeSuccessStyles() {
    const controls = document.querySelectorAll(".form-control");
    controls.forEach(control => {
        control.className = "form-control";
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}