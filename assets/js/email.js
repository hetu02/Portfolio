// EmailJS Form Handling
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS with your public key
  emailjs.init(window.EMAILJS_PUBLIC_KEY);

  // Get the form element
  const contactForm = document.querySelector(".contact-form form");

  // Add event listener to the submit button
  const submitButton = document.querySelector(".sub-btn button");

  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("nam").value;
    const email = document.getElementById("eml").value;
    const phone = document.getElementById("phs").value;
    const subject = document.getElementById("subs").value;
    const message = document.querySelector('textarea[name="mesg"]').value;

    // Validate form
    if (!name || !email || !message) {
      alert("Please fill all required fields");
      return;
    }

    // Show loading state
    const originalButtonText =
      submitButton.querySelector(".kew-text").textContent;
    submitButton.querySelector(".kew-text").textContent = "Sending...";
    submitButton.disabled = true;

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone || "Not provided",
      subject: subject || "Contact from Portfolio",
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        window.EMAILJS_SERVICE_ID,
        window.EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");

          // Reset form
          contactForm.reset();

          // Reset button
          submitButton.querySelector(".kew-text").textContent =
            originalButtonText;
          submitButton.disabled = false;
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");

          // Reset button
          submitButton.querySelector(".kew-text").textContent =
            originalButtonText;
          submitButton.disabled = false;
        }
      );
  });
});
