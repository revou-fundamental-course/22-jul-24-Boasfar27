// Function to handle form submission and validation on Book Now page
document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('form-right');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const departureDate = document.getElementById('departure-date').value.trim();
            const bookingDate = document.getElementById('booking-date').value.trim();
            const paymentMethod = document.getElementById('payment-method').value;
            const destination = document.getElementById('destination').value;
            const passengers = document.getElementById('passengers').value;

            // Validate the form fields
            if (!validateName(name)) {
                alert('Please enter a valid name.');
                return;
            }
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            if (!validatePhone(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            if (!departureDate || !bookingDate || !paymentMethod || !destination || !passengers) {
                alert('Please fill in all fields.');
                return;
            }

            // Show confirmation message
            alert('Booking successful! We will contact you soon.');

            // Redirect to the homepage
            window.location.href = 'index.html'; // Ganti dengan URL beranda Anda jika berbeda
        });
    }

    // Function to validate name format (basic check)
    function validateName(name) {
        return name.length > 0;
    }

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Function to validate phone number format
    function validatePhone(phone) {
        const re = /^\d{10,15}$/;
        return re.test(phone);
    }
});

// Function to handle page navigation
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for internal links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href').substring(1);
            if (document.getElementById(targetId)) {
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            } else {
                // If navigating to another page, use location.href
                window.location.href = this.getAttribute('href');
            }
        });
    });
});
