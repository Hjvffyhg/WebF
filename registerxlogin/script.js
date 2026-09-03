// Grab the form element from the page
const loginForm = document.getElementById('loginForm');

// Listen for when the user clicks 'Log in'
loginForm.addEventListener('submit', function (event) {
  // Prevent page from reloading
  event.preventDefault();

  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  // Basic validation check
  if (email && password) {
    alert(`Success!\n\nEmail: ${email}\nKeep Logged In: ${rememberMe}`);
    // Reset form fields
    loginForm.reset();
  }
});