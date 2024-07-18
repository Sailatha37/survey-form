// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const role = document.getElementById('dropdown').value;
        const source = document.querySelector('input[name="source"]:checked').value;
        const preferences = Array.from(document.querySelectorAll('input[name="prefer"]:checked')).map(el => el.value);
        const feedback = document.getElementById('feedback').value;

        // Basic validation
        if (name && email && phone && role && source) {
            // Hide the form
            form.style.display = 'none';
            // Show the thank you message
            const thankYouMessage = document.createElement('div');
            thankYouMessage.innerHTML = '<h2>Thank you for your feedback!</h2>';
            document.body.appendChild(thankYouMessage);

            // Log the form data to the console
            console.log({
                name,
                email,
                phone,
                address,
                role,
                source,
                preferences,
                feedback
            });
        } else {
            alert('Please fill out all required fields.');
        }
    });
});
