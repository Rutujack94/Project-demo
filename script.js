  // JavaScript Code
  document.addEventListener("DOMContentLoaded", function () {
    // Button Click
    document.getElementById("navigateButton").addEventListener("click", function () {
      window.location.href = "about.html"; // Replace with the actual URL
    });

    // Icon Click
    document.getElementById("navigateIcon").addEventListener("click", function () {
      window.location.href = "services.html"; // Replace with the actual URL
    });

    // Link Click
    document.getElementById("navigateLink").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = "projects.html"; // Replace with the actual URL
    });
  });
