// Initialize EmailJS
(function() {
    emailjs.init("sC2clqDKuElCq522KUp38"); // Replace with your EmailJS User ID
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const templateParams = {
        first_name: document.getElementById("first-name").value,
        last_name: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // Send email using EmailJS
    emailjs.send("service_uhx6kfw", "template_vw36goj", templateParams)
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
});
