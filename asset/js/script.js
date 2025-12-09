const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stops page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Message sent successfully!");  

    // Clear the form
    form.reset();
  });