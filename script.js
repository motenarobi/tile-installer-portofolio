document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
      document.getElementById('formMessage').innerText = 'Thank you for your message, we will get back to you shortly.';
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
  });