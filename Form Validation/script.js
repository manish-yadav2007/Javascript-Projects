const formContainerEl = document.getElementById("formContainer");
const submitBtnEl = document.getElementById("submitBtn");

const inputFields = {
    email: {
        el: document.getElementById("email"),
        errorMsg: document.getElementById("emailError"),
        message: "Please enter a valid email address"
    },
    password: {
        el: document.getElementById("password"),
        errorMsg: document.getElementById("passwordError"),
        message: "Please enter a valid password"
    },
    phone: {
        el: document.getElementById("phone"),
        errorMsg: document.getElementById("phoneError"),
        message: "Please enter a valid phone number"
    },
    username: {
        el: document.getElementById("username"),
        errorMsg: document.getElementById("usernameError"),
        message: "Please enter a valid username"
    },
    terms: {
        el: document.getElementById("terms"),
        errorMsg: document.getElementById("termsError"),
        message: "Please accept the terms and conditions"
    }
};

// Clear all error messages
const clearErrors = () => {
    Object.values(inputFields).forEach(field => {
        field.errorMsg.innerText = "";
        if (field.el.type !== "checkbox") {
            field.el.style.color = "#fff";  // Reset text color (assuming dark theme)
        }
    });
};

// Check password length
const isPasswordValidLength = (password) => {
    return password.length >= 8;
};

// Validate the entire form
const formValidation = () => {
    clearErrors();

    let isValid = true;

    for (let key in inputFields) {
        const { el, errorMsg, message } = inputFields[key];

        if ((el.type === "checkbox" && !el.checked) || (el.type !== "checkbox" && el.value.trim() === "")) {
            errorMsg.innerText = message;
            el.focus();
            isValid = false;
            break;
        }

        // Extra validation for password length
        if (key === "password") {
            if (!isPasswordValidLength(el.value.trim())) {
                errorMsg.innerText = "Password must be at least 8 characters long";
                el.focus();
                el.style.color = "red";
                isValid = false;
                break;
            } else {
                el.style.color = "green";
            }
        }

        if (key === "phone") {
            if (!el.value.trim().match(/^\d{10}$/)) {
                errorMsg.innerText = "Please enter a valid 10-digit phone number";
                el.focus();
                el.style.color = "red";
                isValid = false;
                break;
            }
            else {
                el.style.color = "green";
            }
        }
    }

    // If all fields are valid
    if (isValid) {
        alert("Form Submitted Successfully ✅");
        // formContainerEl.submit();  // optional real form submit
    }
};

// Event listener
submitBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    formValidation();
});
