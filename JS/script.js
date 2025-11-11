// Initialize EmailJS
emailjs.init(""); // Replace with your EmailJS public key

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form fields
  const name = form.querySelector('input[placeholder="Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  // Simple validation
  if (!name || !email || !message) {
    showMessage("Please fill in all required fields.", "error");
    return;
  }

  // Send email using EmailJS
  emailjs.sendForm('', '', form)
    .then(() => {
      showMessage("Message sent successfully!", "success");
      form.reset(); // Clear the form
    }, (error) => {
      console.error('EmailJS Error:', error);
      showMessage("Oops! Something went wrong. Please try again.", "error");
    });
});

// Function to show messages (success/error)
function showMessage(msg, type) {
  // Remove any existing message
  const existing = document.querySelector('.form-message');
  if (existing) existing.remove();

  const div = document.createElement('div');
  div.className = `form-message ${type}`; // type = success or error
  div.innerText = msg;
  form.prepend(div);

  // Auto-remove message after 4 seconds
  setTimeout(() => div.remove(), 4000);
}
