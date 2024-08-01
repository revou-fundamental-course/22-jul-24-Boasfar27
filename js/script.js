document.addEventListener('DOMContentLoaded', function () {
    // Form validation and submission handling
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
            window.location.href = 'index.html'; // Change this to your homepage URL if different
        });

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
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If navigating to another page, use location.href
                window.location.href = this.getAttribute('href');
            }
        });
    });

    // Filter functionality
    const destinationFilter = document.getElementById('destination-filter');
    const priceFilter = document.getElementById('price-filter');
    const packageItems = document.querySelectorAll('.package-item');

    function filterPackages() {
        const selectedDestination = destinationFilter.value;
        const selectedPrice = priceFilter.value;

        packageItems.forEach(item => {
            const destination = item.getAttribute('data-destination');
            const price = item.getAttribute('data-price');
            let show = true;

            // Filter berdasarkan destinasi
            if (selectedDestination !== 'all' && destination !== selectedDestination) {
                show = false;
            }

            // Filter berdasarkan harga
            if (selectedPrice !== 'all') {
                if (selectedPrice === 'low' && price !== 'medium' && price !== 'high') {
                    show = false;
                } else if (selectedPrice === 'medium' && price === 'high') {
                    show = false;
                }
            }

            item.style.display = show ? 'block' : 'none';
        });
    }

    // Add event listeners for filter
    if (destinationFilter && priceFilter) {
        destinationFilter.addEventListener('change', filterPackages);
        priceFilter.addEventListener('change', filterPackages);
    }
});

// travel
document.addEventListener('DOMContentLoaded', function () {
    const destinationFilter = document.getElementById('filter-destination');
    const priceFilter = document.getElementById('filter-price');
    const packageItems = document.querySelectorAll('.package-item');

    function filterPackages() {
        const selectedDestination = destinationFilter.value;
        const selectedPrice = priceFilter.value;

        packageItems.forEach(item => {
            const destination = item.getAttribute('data-destination');
            const price = item.getAttribute('data-price');
            let show = true;

            // Filter berdasarkan destinasi
            if (selectedDestination !== 'all' && destination !== selectedDestination) {
                show = false;
            }

            // Filter berdasarkan harga
            if (selectedPrice !== 'all') {
                if (selectedPrice === 'low' && price !== 'low') {
                    show = false;
                } else if (selectedPrice === 'medium' && (price === 'high' || price === 'low')) {
                    show = false;
                } else if (selectedPrice === 'high' && price !== 'high') {
                    show = false;
                }
            }

            item.style.display = show ? 'block' : 'none';
        });
    }

    // Add event listener for filter button
    document.querySelector('button').addEventListener('click', filterPackages);
});

// responsif

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const linksContainer = document.querySelector('.links-container');

    menuToggle.addEventListener('click', () => {
        linksContainer.classList.toggle('active');
    });
});

