// JavaScript for form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value;
    if (name.length < 3) { // Simple length check for example
        document.getElementById('nameError').innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = "Please enter a valid email.";
        isValid = false;
    }

    // Validate Message
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').innerText = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        // Form submission logic here
    }
});