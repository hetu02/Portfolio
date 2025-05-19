 // First, add EmailJS CDN link to your HTML file (add this in the head section of your HTML)
// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Initialize EmailJS
// Add this script just before closing body tag
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    // Replace "your_public_key" with your actual EmailJS public key
    emailjs.init("PzLKWb2P4yDlzsY1_");
    
    // Get the form element
    const contactForm = document.querySelector('.contact-form form');
    
    // Add event listener to the submit button
    const submitButton = document.querySelector('.sub-btn button');
    
    submitButton.addEventListener('click', function(e) {
        console.log("in submit button");
        
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('nam').value;
        const email = document.getElementById('eml').value;
        const phone = document.getElementById('phs').value;
        const subject = document.getElementById('subs').value;
        const message = document.querySelector('textarea[name="mesg"]').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill all required fields');
            return;
        }
        
        // Show loading state
        const originalButtonText = submitButton.querySelector('.kew-text').textContent;
        submitButton.querySelector('.kew-text').textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Prepare template parameters
        const templateParams = {
            from_name: name,
            from_email: email,
            phone: phone,
            subject: subject,
            message: message
        };
        
        // Send email using EmailJS
        // Replace "your_service_id" and "your_template_id" with your actual EmailJS service and template IDs
        emailjs.send('service_efrqghl', 'template_nd1q5nk', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully!');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitButton.querySelector('.kew-text').textContent = originalButtonText;
                submitButton.disabled = false;
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
                
                // Reset button
                submitButton.querySelector('.kew-text').textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });
});