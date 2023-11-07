document.addEventListener("DOMContentLoaded", function() {
    const pass = document.getElementById("pass");
    const cpass = document.getElementById("cpass");
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      if (pass.value !== cpass.value) {
        alert("Passwords do not match. Please try again.");
        event.preventDefault(); // Prevent the form from submitting
      }
    });
  });
  