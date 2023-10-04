// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Simulate a delay for demonstration purposes (remove this line in your actual implementation)
    setTimeout(function () {
        hideLoader();
    }, 2000); // Adjust the delay as needed

    function hideLoader() {
        // Find the loader container element
        const loaderContainer = document.querySelector(".loader-container");

        // Set its display style to "none" to hide it
        loaderContainer.style.display = "none";

        // Show the scrollbars
        document.body.style.overflow = "auto";
    }
});
