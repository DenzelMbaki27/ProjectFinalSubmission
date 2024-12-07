document.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const form = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const resetButton = document.getElementById('resetButton');

    // Form Validation before submitting
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting if validation fails

        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Form submitted successfully!');
            // You can add AJAX submission here if needed
            form.reset(); // Reset form after submission
        } else {
            alert('Please fill out all fields!');
        }
    });

    // Reset Button functionality
    resetButton.addEventListener('click', function () {
        form.reset();
        alert('Form has been reset!');
    });
});
