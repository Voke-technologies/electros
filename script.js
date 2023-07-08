// script.js

// You can add your JavaScript code here to enhance interactivity and functionality on your website

// Example: Display a welcome message when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
  const welcomeMessage = 'Welcome to our Electric Shop!';
  alert(welcomeMessage);
});

// Example: Implement a basic form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Perform your form validation logic here
  // Example: Validate if the name and email fields are not empty
  const nameField = document.getElementById('name');
  const emailField = document.getElementById('email');

  if (nameField.value === '' || emailField.value === '') {
    alert('Please enter your name and email.');
    return; // Stop form submission if validation fails
  }

  // If the validation passes, you can proceed with form submission or other actions
  alert('Form submitted successfully!');
  form.reset(); // Reset the form fields
});
