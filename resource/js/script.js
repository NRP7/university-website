// JavaScript to show and hide the loader
document.addEventListener("DOMContentLoaded", function () {
    // Hide the loader when the content is fully loaded
    setTimeout(function () {
        document.querySelector(".loader-container").style.display = "none";
    }, 2000); // Adjust the delay as needed
});