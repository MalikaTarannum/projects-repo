document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);

    // Create object to hold form data
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });

    // Display form data
    alert(JSON.stringify(userData));
  });
