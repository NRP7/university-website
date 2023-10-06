document.addEventListener("DOMContentLoaded", function () {
    // Display the pre-loader when the page starts loading
    showLoader();

    // Add an event listener to wait for the page to fully load
    window.onload = function () {
        // Hide the pre-loader once the page has finished loading
        hideLoader();
    };

    function showLoader() {
        // Find the loader container element
        const loaderContainer = document.querySelector(".loader-container");

        // Set its display style to "block" to show it
        loaderContainer.style.display = "block";

        // Hide the scrollbars
        document.body.style.overflow = "hidden";
    }

    function hideLoader() {
        // Find the loader container element
        const loaderContainer = document.querySelector(".loader-container");

        // Set its display style to "none" to hide it
        loaderContainer.style.display = "none";

        // Show the scrollbars
        document.body.style.overflow = "auto";
    }
});

const btnScrollToTop = document.querySelector(".btn-scroll-to-top");

btnScrollToTop.addEventListener("click", function(){

    window.scrollTo({
        top: 0,
        left: 0
    });

});

const scrollToTopButton = document.getElementById('scroll-to-top-button');

window.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
        scrollToTopButton.style.display = 'none';
    } else {
        scrollToTopButton.style.display = 'block';
    }
});

$(document).ready(function () {
    $('#card-carousel').carousel({
        interval: 3000, // Set the interval between slides (in milliseconds)
        pause: false,   // Set to true if you want to pause on hover
        wrap: true      // Set to true for continuous looping
    });
});
