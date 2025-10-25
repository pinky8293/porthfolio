document.addEventListener('DOMContentLoaded', () => {
            // Set current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // 1. Mobile Menu Toggle Logic
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when a link is clicked
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    // Hide the menu
                    mobileMenu.classList.add('hidden');
                });
            });

            // 2. Contact Form Submission Handler (Handles form data and modal display)
            const contactForm = document.getElementById('contact-form');
            const messageModal = document.getElementById('message-modal');
            const closeModalBtn = document.getElementById('close-modal-btn');

            contactForm.addEventListener('submit', function (e) {
                e.preventDefault(); // Stop the page from reloading

                // Collect form data (simulated submission)
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;

                console.log('Form Submitted (Simulated):');
                console.log(`Name: ${name}`);
                console.log(`Email: ${email}`);
                console.log(`Message: ${message}`);

                // Show the custom success modal (Replacing the requested alert)
                messageModal.classList.remove('hidden');

                // Clear the form fields
                contactForm.reset();
            });

            // 3. Modal Close Handlers
            // Close button inside the modal
            closeModalBtn.addEventListener('click', () => {
                messageModal.classList.add('hidden');
            });

            // Close modal when clicking outside (on the overlay)
            messageModal.addEventListener('click', (e) => {
                if (e.target === messageModal) {
                    messageModal.classList.add('hidden');
                }
            });
            
            // 4. Resume Download handler (optional log)
            document.getElementById('resume-download').addEventListener('click', () => {
                console.log('Resume download link clicked.');
            });
        });

