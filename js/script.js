// =====================
//  F1 World - script.js
// =====================

// ---- Contact Form Validation ----
// We grab the form by its id
var contactForm = document.getElementById("contactForm");

// Only run this code if the contact form exists on the page
if (contactForm) {

    contactForm.addEventListener("submit", function(event) {
        // Stop the form from submitting and refreshing the page
        event.preventDefault();

        // Get the values the user typed in
        var name    = document.getElementById("fullname").value.trim();
        var email   = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value.trim();

        // Track whether the form is valid
        var isValid = true;

        // --- Validate Name ---
        if (name === "") {
            document.getElementById("nameError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("nameError").style.display = "none";
        }

        // --- Validate Email ---
        // Check that it contains @ and a dot after it
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || !emailPattern.test(email)) {
            document.getElementById("emailError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("emailError").style.display = "none";
        }

        // --- Validate Subject ---
        if (subject === "") {
            document.getElementById("subjectError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("subjectError").style.display = "none";
        }

        // --- Validate Message ---
        if (message.length < 10) {
            document.getElementById("messageError").style.display = "block";
            isValid = false;
        } else {
            document.getElementById("messageError").style.display = "none";
        }

        // --- If everything is valid, show success message ---
        if (isValid) {
            document.getElementById("successMsg").style.display = "block";
            contactForm.reset(); // clear the form fields
        }
    });
}


// ---- Dark / Light Mode Toggle ----
// This is the second JS feature for the assignment
var toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
        // Toggle a class on the body
        document.body.classList.toggle("light-mode");

        // Change the button text depending on current mode
        if (document.body.classList.contains("light-mode")) {
            toggleBtn.textContent = "🌙 Dark Mode";
        } else {
            toggleBtn.textContent = "☀️ Light Mode";
        }
    });
}
